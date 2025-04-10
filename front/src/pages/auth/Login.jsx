import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export default function AuthLogin() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const success = await login(form);
    if (success) {
      navigate("/");
    } else {
      alert("Erreur de login");
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f2f2f2, #e6e6e6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
            border: "1px solid #f2849e",
          }}
        >
          <CardContent>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom color="#f2849e">
                🎬 MovieBooker
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Connexion à votre compte
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Adresse e-mail"
                type="email"
                fullWidth
                required
                variant="outlined"
                sx={{
                  mb: 3,
                  backgroundColor: "#f9f9f9", // Fond légèrement gris pour mieux voir le texte
                  "& label.Mui-focused": { color: "#f2849e" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#d1d1d1", // Bordure par défaut
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#f2849e", // Bordure quand focus
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#333", // Texte noir pour une meilleure lisibilité
                  },
                }}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <TextField
                label="Mot de passe"
                type="password"
                fullWidth
                required
                variant="outlined"
                sx={{
                  mb: 3,
                  backgroundColor: "#f9f9f9", // Fond légèrement gris pour mieux voir le texte
                  "& label.Mui-focused": { color: "#f2849e" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#d1d1d1", // Bordure par défaut
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#f2849e", // Bordure quand focus
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#333", // Texte noir pour une meilleure lisibilité
                  },
                }}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  backgroundColor: "#f2849e",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#e06a89",
                  },
                }}
              >
                Se connecter
              </Button>

              {/* Lien vers la page d'enregistrement */}
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Pas encore de compte ?{" "}
                  <Link
                    component={RouterLink}
                    to="/register"
                    sx={{
                      color: "#f2849e",
                      fontWeight: "bold",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Inscrivez-vous ici
                  </Link>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}