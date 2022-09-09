import React, { useEffect, useState } from "react";
import { Alert, Avatar, Box, Button, Card, Grid } from "@mui/material";
import styles from "./infiniteList.module.css";
import UserCardSkeleton from "./userCardSkeleton";
import { useRef } from "react";
import { useCallback } from "react";

const emptyArray = new Array(21).fill(true);
const observerOptions = {
  root: null,
  rootMargin: "0px 15px",
  threshold: 1.0,
};

const InfiniteList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  const getUsersList = useCallback(
    async (controller) => {
      try {
        setLoading(true);
        // TODO: Wait for 2s to display animated card for loading list
        await new Promise((res) => setTimeout(res, 2000));

        // TODO: Use of github open api
        const res = await fetch(
          `https://api.github.com/users?per_page=21&since=${
            userList.length ? userList[userList.length - 1]?.id : 0
          }`,
          { signal: controller.signal }
        ).then((res) => res.json());
        if (res.length) setUserList((userList) => [...userList, ...res]);
        else observerRef?.current?.disconnect();
      } catch (err) {
        console.log(err);
        observerRef?.current?.disconnect();
      }
      setLoading(false);
    },
    [userList]
  );

  useEffect(() => {
    const controller = new AbortController();
    getUsersList(controller);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        const controller = new AbortController();
        getUsersList(controller);
      }
    }, observerOptions);
    observer.observe(targetRef.current);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [getUsersList]);

  return (
    <Box sx={{ maxHeight: "calc(100vh - 204px)", overflow: "auto" }}>
      <Grid marginTop="10px" container spacing={3} justifyContent="center">
        {userList.length ? (
          userList.map((user) => <GitUserCard user={user} key={user.id} />)
        ) : loading ? (
          <></>
        ) : (
          <div className={styles.center_page}>
            <Alert severity="info">Opps !! There is no items to show</Alert>
          </div>
        )}
        {loading && <DummyCardList />}
      </Grid>
      <div className="observer" ref={targetRef}></div>
    </Box>
  );
};

const GitUserCard = ({ user }) => {
  const { card_container, avatar_container, user_details, user_name } = styles;

  return (
    <Grid item xl key={user.id}>
      <Card sx={{ maxWidth: 345, margin: "15px" }}>
        <div className={card_container}>
          <div className={avatar_container}>
            <Avatar
              alt="mojombo"
              src={user.avatar_url}
              sx={{ width: 48, height: 48 }}
            />
          </div>
          <div className={user_details}>
            <div className={user_name}>Account Name :- {user.login}</div>
            <div className="user_link">
              <Button
                variant="outlined"
                color="info"
                onClick={() => window.open(user.html_url, "_blank")}
              >
                Github Link
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

const DummyCardList = () => {
  return emptyArray.map((bool, id) => <UserCardSkeleton key={id} />);
};

export default InfiniteList;
