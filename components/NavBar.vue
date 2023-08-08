<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar-title">
      <img class="navbar-logo" alt="The Finite Doctor logo" src="/image/icon/the-finite-doctor.png" />
    </RouterLink>
    <Dropdown title="Projects">
      <DropdownItem to="/projects/apollo">Apollo</DropdownItem>
      <DropdownItem to="/projects/classic-3d">Classic 3D</DropdownItem>
      <DropdownItem to="/projects/commands-plus">Commands+</DropdownItem>
    </Dropdown>
    <Dropdown title="Socials">
      <DropdownItem to="https://the-pink-hacker.tumblr.com">Tumblr</DropdownItem>
      <DropdownItem to="https://github.com/RyanThePinkHacker">GitHub</DropdownItem>
      <DropdownItem to="https://www.curseforge.com/members/thepinkhacker/projects">CurseForge
      </DropdownItem>
      <DropdownItem to="https://modrinth.com/user/ThePinkHacker">Modrinth</DropdownItem>
    </Dropdown>
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
