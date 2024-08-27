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

  // Validation
  const LoginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email address is required" })
      .email("Invalid email address"),
    password: z.string().min(1, { message: "Password is required" }),
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
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto rounded-xl py-8 px-8 bg-glass"
        sx={{ maxWidth: "550px", width: "100%" }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "blue",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1.5rem",
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
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              {errors.email?.message}
            </Typography>
          }
          sx={TextFieldStyle}
          InputLabelProps={{
            sx: { fontSize: "1rem", fontWeight: "bold" },
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
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
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
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={TextFieldStyle}
          InputLabelProps={{
            sx: { fontSize: "1rem", fontWeight: "bold" },
          }}
        />

        {/* Others */}
        <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between mt-1">
          <FormGroup sx={{ marginLeft: "-.8rem" }}>
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox {...register("checkBox")} />}
              label={
                <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                  Remember Me
                </Typography>
              }
            />
          </FormGroup>
          <Link
            href="/"
            variant="body2"
            underline="hover"
            sx={{ color: "blue", fontWeight: "bold", fontSize: "1rem" }}
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
            background: `linear-gradient(
    90deg,
    hsla(0, 100%, 64%, 1) 0%,
    hsla(210, 100%, 30%, 1) 100%
  );`,
            color: "white",
            paddingY: ".7rem",
            borderRadius: ".75rem",
            marginY: "2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          Log in
        </Button>

        <Box display="flex" alignItems="center">
          <Divider sx={{ flexGrow: 1 }} />
          <Typography
            variant="body1"
            sx={{ mx: 2, color: "grey", fontSize: "1rem", fontWeight: "bold" }}
          >
            Don&apos;t have an account?
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        {/* Btns */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between w-full mt-[2rem]">
          <Button
            component="a"
            href="/counter-registration"
            sx={{
              borderColor: "blue",
              color: "blue",
              paddingY: ".8rem",
              paddingX: "1.2rem",
              borderRadius: ".75rem",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.4s ease",
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
                borderColor: "blue",
              },
            }}
            variant="outlined"
            startIcon={<Person />}
          >
            Counter Registration
          </Button>

          <Button
            component="a"
            href="/agency-registration"
            sx={{
              borderColor: "blue",
              color: "blue",
              paddingY: ".8rem",
              paddingX: "1.2rem",
              borderRadius: ".75rem",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.4s ease",
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
                borderColor: "blue",
              },
            }}
            variant="outlined"
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
