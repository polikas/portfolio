import { Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const linkedInProfile = "https://www.linkedin.com/in/stavros-charitos/";
  const youtubeProfile = "https://www.youtube.com/@BlackOz_TV";
  const gitHubProfile = "https://github.com/polikas";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      maxWidth={400}
      mx="auto"
    >
      <Typography>Email: polikasxaritos@gmail.com</Typography>
      <Typography>Mobile: +447743538016 (UK)</Typography>
      <Box display="flex" justifyContent="center" width="100%">
        <a
          href={linkedInProfile}
          target="_blank"
          style={{ color: "#0e76a8", marginRight: "10px" }}
        >
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </a>
        <a
          href={youtubeProfile}
          target="_blank"
          style={{ color: "#ff0000", marginRight: "10px" }}
        >
          <YouTubeIcon sx={{ fontSize: 40 }} />
        </a>
        <a href={gitHubProfile} target="_blank" style={{ color: "#24292e" }}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a>
      </Box>
    </Box>
  );
};

export default Contact;
