import { Card, Grid, Skeleton } from '@mui/material'
import React from 'react';
import styles from "./infiniteList.module.css";

const UserCardSkeleton = () => {
   const { card_container, avatar_container, user_details, user_name } = styles;
   return (
      <Grid item xl >
         <Card sx={{ maxWidth: 345, margin: "15px" }}>
            <div className={card_container}>
               <div className={avatar_container}>
                  <Skeleton variant="circular" animation="wave" width={40} height={40} />
               </div>
               <div className={user_details}>
                  <div className={user_name}>
                     <Skeleton variant='text' animation="wave" />
                  </div>
                  <div className="user_link">
                     <Skeleton variant='text' animation="wave" />
                  </div>
               </div>
            </div>
         </Card>
      </Grid>
   )
}

export default UserCardSkeleton;