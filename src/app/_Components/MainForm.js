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
import {
  Visibility,
  VisibilityOff,
  Person,
  PeopleAlt,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

//MUI Styles
const TextFieldStyle = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white", // Label color on focus
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white", // Border color when focused
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: ".75rem", // Border Radius
    backgroundColor: "blue", // Blue background color
    "& input": {
      color: "white", // White text color inside the input
    },
    "&:hover fieldset": {
      borderColor: "white", // Border color on hover
    },
  },
  marginTop: "2rem",
};

const MainForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Validation
  const LoginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email address is required!" })
      .email("Invalid email address"),
    password: z.string().min(1, { message: "Password is required!" }),
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
    <div className="w-full h-full tracking-wider flex justify-center items-center  xl:ml-20">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className=" px-8 "
        sx={{ width: "90%" }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          Welcome!
        </Typography>

        {/* Inputs */}
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Username or Email Address"
          name="email"
          {...register("email")}
          error={!!errors.email}
          helperText={
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}
              component="span"
            >
              {errors.email?.message}
            </Typography>
          }
          sx={{ ...TextFieldStyle, mb: 1 }}
          InputLabelProps={{
            sx: { fontSize: "1rem", fontWeight: "bold", color: "white" },
          }}
        />

        <TextField
          variant="outlined"
          required
          fullWidth
          label="Password"
          name="password"
          {...register("password")}
          error={!!errors.password}
          helperText={
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}
              component="span"
            >
              {errors.password?.message}
            </Typography>
          }
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                  sx={{ color: "white" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ ...TextFieldStyle, mt: 1 }}
          InputLabelProps={{
            sx: { fontSize: "1rem", fontWeight: "bold", color: "white" },
          }}
        />

        {/* Others */}
        <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between">
          <FormGroup sx={{ marginLeft: "-.8rem" }}>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Checkbox
                  {...register("checkBox")}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      fill: "white",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{ color: "white", fontWeight: "bold" }}
                  component="span"
                >
                  Remember Me
                </Typography>
              }
            />
          </FormGroup>
          <Link
            href="/"
            variant="body2"
            underline="hover"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              marginLeft: ".2rem",
            }}
          >
            Forgot Your Password?
          </Link>
        </div>

        {/* Btn */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            background: `linear-gradient(90deg, hsla(15, 100%, 75%, 1) 0%, hsla(210, 100%, 25%, 1) 100%);`,
            color: "white",
            paddingY: ".7rem",
            borderRadius: ".75rem",
            marginY: "2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            "&:hover": {
              background: `linear-gradient(90deg, hsla(210, 100%, 25%, 1) 0%, hsla(15, 100%, 75%, 1) 100%)`,
            },
          }}
        >
          Log in
        </Button>

        <Box display="flex" alignItems="center">
          <Divider sx={{ flexGrow: 1, backgroundColor: "#FF9F80" }} />
          <Typography
            variant="body1"
            sx={{ mx: 2, fontSize: "1rem", fontWeight: "bold" }}
            className="text-[#FF9F80]"
          >
            Don&apos;t have an account?
          </Typography>
          <Divider sx={{ flexGrow: 1, backgroundColor: "#FF9F80" }} />
        </Box>

        {/* Btns */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between w-full mt-[1.5rem]">
          <Button
            component="a"
            href="/counter-registration"
            sx={{
              background: `linear-gradient(90deg, hsla(15, 100%, 75%, 1) 0%, hsla(210, 100%, 25%, 1) 100%);`,
              color: "white",
              paddingY: ".6rem",
              paddingX: "1.2rem",
              borderRadius: ".75rem",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.4s ease",
              "&:hover": {
                background: `linear-gradient(90deg, hsla(210, 100%, 25%, 1) 0%, hsla(15, 100%, 75%, 1) 100%)`,
                color: "white",
                border: "none",
              },
            }}
            variant="contained"
            startIcon={<Person />}
          >
            Counter Registration
          </Button>

          <Button
            component="a"
            href="/agency-registration"
            sx={{
              background: `linear-gradient(90deg, hsla(15, 100%, 75%, 1) 0%, hsla(210, 100%, 25%, 1) 100%);`,
              color: "white",
              paddingY: ".6rem",
              paddingX: "1.2rem",
              borderRadius: ".75rem",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.4s ease",
              "&:hover": {
                background: `linear-gradient(90deg, hsla(210, 100%, 25%, 1) 0%, hsla(15, 100%, 75%, 1) 100%)`,
                color: "white",
                border: "none",
              },
            }}
            variant="contained"
            startIcon={<PeopleAlt />}
          >
            Agency Registration
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default MainForm;
