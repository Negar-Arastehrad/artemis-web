import React from "react";
import {
  TextField,
  Link,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";

const MainForm = () => {
  return (
    <div>
      <Box
        component="form"
        noValidate
        maxWidth="80%"
        className=" bg-purple-400"
      >
        <p className="">
          همکار محترم جهت استفاده از امکانات سایت لطفا وارد شوید
        </p>
      </Box>
    </div>
  );
};

export default MainForm;
