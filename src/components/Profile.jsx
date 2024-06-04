import { Avatar, Grid, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography paragraph>
          Hello, my name is Stavros Charitos, with extensive experience as a
          Software Developer across diverse industries and projects, I bring
          strong expertise in full-stack and backend development. Proficient in
          numerous languages and technologies including C# and JavaScript, I am
          adept at tackling a wide range of problem-solving, troubleshooting,
          and analytical tasks. My adaptability shines through both independent
          work and collaboration within successful teams. I excel in both
          written and verbal communication, effectively engaging with
          stakeholders at all levels. My commitment to ongoing professional
          growth is evident from my First-Class Honours BSc in Game Development
          and a scholarship at Northcoders.
        </Typography>
        <Typography paragraph>
          Throughout my career, I have primarily focused on maintaining and
          enhancing both internal and external applications for the companies I
          have served. I have a strong inclination towards backend debugging and
          resolving complex issues efficiently, although I have frequently
          contributed as a full-stack developer. My current objective is to
          deepen my technical expertise and master new technologies to optimize
          systems and applications. Lately, I have been engaging in mini
          projects on my own, concentrating on learning new tech stacks and
          innovative development methods to continually improve my ability to
          deliver high-quality solutions.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt="Stavros Charitos"
          src="/me2.jpg"
          sx={{ width: { xs: 150, sm: 500 }, height: { xs: 150, sm: 500 } }}
        />
      </Grid>
    </Grid>
  );
};

export default Profile;
