"use client";
import React, { useState } from "react";
import {
  TextField,
  Link,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Typography,
  Box,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, Person, PeopleAlt } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

//MUI Styles
const TextFieldStyle = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: "blue", // Label color on focus
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue", // Border color when focused
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: ".75rem", // Border Radius
    "&:hover fieldset": {
      borderColor: "blue", // Border color on hover
    },
  },
  marginTop: "2rem",
};

const MainForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  //Validation
  const LoginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "آدرس ایمیل الزامی است" })
      .email("آدرس ایمیل نامعتبر است"),
    password: z.string().min(1, { message: "رمز عبور الزامی است" }),
    checkBox: z.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full tracking-wider flex justify-center items-center">
      <Box
        component="form"
        noValidate
        maxWidth="80%"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        className="m-auto rounded-xl py-8 px-8"
      >
        <p className="text-blue font-semibold text-center mb-5">
          همکار محترم جهت استفاده از امکانات سایت لطفا وارد شوید
        </p>

        {/* Inputs */}
        <TextField
          variant="outlined"
          required
          fullWidth
          label="نام کاربری یا آدرس ایمیل"
          name="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={TextFieldStyle}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="رمز عبور"
          name="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={TextFieldStyle}
        />

        {/* Others */}
        <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between mt-3">
          <FormGroup sx={{ marginLeft: "-.8rem" }}>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Checkbox
                  {...register("checkBox")}
                />
              }
              label={<Typography color="blue">مرا به خاطر بسپار</Typography>}
            />
          </FormGroup>
          <Link href="/" variant="body2" underline="hover" color="blue">
            آیا رمز عبور خود را فراموش کردید؟
          </Link>
        </div>

        {/* Btn */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "blue",
            "&:hover": {
              backgroundColor: "hoverBlue",
            },
            paddingY: ".8rem",
            borderRadius: ".75rem",
            marginY: "2rem",
          }}
        >
          وارد شوید
        </Button>

        <Divider
          sx={{
            borderWidth: ".7px",
          }}
        />

        {/* Btns */}
        <div className="flex items-center justify-between w-full mt-[2rem]">
          <Button
            component="a"
            href="/ثبت-نام-کانتر"
            sx={{
              borderColor: "blue",
              color: "blue",
              padding: ".8rem",
              borderRadius: ".75rem",
            }}
            variant="outlined"
            startIcon={<Person />}
          >
            ثبت نام کانتر
          </Button>
          <Button
            component="a"
            href="/ثبت-نام-آژانس"
            sx={{
              borderColor: "blue",
              color: "blue",
              padding: ".8rem",
              borderRadius: ".75rem",
            }}
            variant="outlined"
            startIcon={<PeopleAlt />}
          >
            ثبت نام آژانس
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default MainForm;
