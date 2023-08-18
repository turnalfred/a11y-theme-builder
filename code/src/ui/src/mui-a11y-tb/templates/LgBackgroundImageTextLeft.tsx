﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const LgBackgroundImageTextLeft: React.FC<Props> = ({className=""}) => {
    return (

          <Grid className={"v-center background " + className}  container spacing={2} columns={12}>
            <Grid item spacing={2} className="v-center backgroundImage" lg={8} md={6} sm={12} style={{backgroundImage: "url(/sample.jpg)"}}>
            </Grid>
            <Grid item spacing={2} className="v-center" lg={4} md={6} sm={12}>
              <h2>Large Background Image on Left</h2>
              <div className="body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </Grid>
          </Grid>


    )
}
