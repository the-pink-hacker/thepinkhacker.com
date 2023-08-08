<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar-title">
      <img class="navbar-logo" alt="The Finite Doctor logo" src="/image/icon/the-finite-doctor.png" />
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
      <NuxtLink to="/blog/overview">Blog</NuxtLink>
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
