import { Avatar, Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Box
        height={"auto"}
        width={{ xs: "90%", sm: "80%", md: "70%", lg: "60%" }}
        mx="auto"
        my={1}
        p={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          border: "2px solid grey",
          borderRadius: 8,
          backgroundColor: "#1976D2",
          color: "white",
        }}
      >
        <Avatar
          alt="Stavros Charitos"
          src="/me.jpg"
          sx={{
            width: { xs: 150, sm: 300 },
            height: { xs: 150, sm: 300 },
          }}
        />
        <Typography paragraph>
          I was born and raised in Athens, Greece. My passion for interactive
          experiences began at around eight years old when I started playing
          "The Legend of Zelda" on Gameboy Color and "Crash Bash" on PSone. This
          early interest in gaming sparked a lifelong enthusiasm for software
          and gaming entertainment systems.
        </Typography>
        <Typography paragraph>
          My journey into software development began at 21, guided by online
          courses and one-on-one mentorship from the talented{" "}
          <a
            href="https://www.linkedin.com/in/michaelvogiatzis/"
            target="_blank"
          >
            Michael Vogiatzis,
          </a>{" "}
          visit his{" "}
          <a href="https://www.foxymonkey.com/" target="_blank">
            blog
          </a>
          . His mentorship provided a strong foundation in programming
          principles. I actively participate in local developer events hosted by
          industry experts, which are excellent opportunities for networking,
          live coding, and gaining inspiration. During my studies, I also
          engaged in Hackathons and Game Jams, both internally and externally,
          which enhanced my ability to think creatively and work effectively in
          high-pressure team environments.
        </Typography>
        <Typography paragraph>
          I hold a First-Class Honours Bachelor of Science degree in Game
          Development from the University of Sunderland. Since graduating, I
          have worked with various companies, ranging from small developer teams
          to larger groups of highly skilled colleagues. My professional
          experience has allowed me to continually grow and adapt in the
          ever-evolving tech landscape. I am always eager to explore new areas
          and modern technologies, using my passion for coding to drive my
          career forward.
        </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
