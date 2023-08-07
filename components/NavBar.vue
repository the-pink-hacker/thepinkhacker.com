<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar-title">
      <img class="navbar-logo" alt="The Finite Doctor logo"
        src="https://64.media.tumblr.com/9f8c7f74bae8fbed95da32b8f828057c/13b7d9e2059964e1-78/s512x512u_c1/8984afa2cfbeaa6d14ccfed2d939b585efde4048.jpg" />
    </RouterLink>
    <Dropdown title="Projects" :options="[
      { title: 'Apollo', link: '/projects/apollo' },
      { title: 'Classic 3D', link: '/projects/classic-3d' },
      { title: 'Commands+', link: '/projects/commands-plus' },
    ]" />
    <Dropdown title="Socials" :options="[
      { title: 'Tumblr', link: 'https://the-pink-hacker.tumblr.com', isRoute: false },
      { title: 'GitHub', link: 'https://github.com/RyanThePinkHacker', isRoute: false },
      { title: 'CurseForge', link: 'https://www.curseforge.com/members/thepinkhacker/projects', isRoute: false },
      { title: 'Modrinth', link: 'https://modrinth.com/user/ThePinkHacker', isRoute: false },
    ]" />
    <BorderedBlock>
      <RouterLink to="/blog/overview">Blog</RouterLink>
    </BorderedBlock>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  background-color: var(--background-accent-color);
}

.navbar-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px;
}


// TODO: Width shouldn't be fixed
.navbar-logo {
  width: 48px;
}
</style>
