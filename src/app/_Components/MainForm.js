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
    <div className="w-full h-full "> {/*flex justify-center items-center*/}
      <Box
        component="form"
        noValidate
        maxWidth="80%"
        sx={{backgroundColor:'rgba(255, 255, 255, 0.55)'}}
      >
        <p className="text-blue font-semibold">
          همکار محترم جهت استفاده از امکانات سایت لطفا وارد شوید
        </p>
      </Box>
    </div>
  );
};

export default MainForm;
