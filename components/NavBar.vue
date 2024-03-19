<template>
    <nav>
        <RouterLink to="/" class="navbar-title">
            <img class="navbar-logo" alt="The Finite Doctor logo" src="/image/icon/the-finite-doctor.png" />
        </RouterLink>

        <Dropdown title="Projects">
            <DropdownItem to="/project/apollo">Apollo</DropdownItem>
            <DropdownItem to="/project/classic-3d">Classic 3D</DropdownItem>
            <DropdownItem to="/project/commands-plus">Commands+</DropdownItem>
            <DropdownItem to="/project/ti-sans-undertale">TI Sans Undertale</DropdownItem>
        </Dropdown>

        <Dropdown title="Socials">
            <DropdownItem to="https://the-pink-hacker.tumblr.com">Tumblr</DropdownItem>
            <DropdownItem to="https://github.thepinkhacker.com">GitHub</DropdownItem>
            <DropdownItem to="https://social.linux.pizza/@ThePinkHacker">Mastodon</DropdownItem>
            <DropdownItem to="https://modrinth.com/user/ThePinkHacker">Modrinth</DropdownItem>
        </Dropdown>

        <BorderedBlock>
            <NuxtLink to="/blog">Blog</NuxtLink>
        </BorderedBlock>

        <Dropdown title="EZ80">
            <DropdownItem to="/ez80/opcode">Opcode Table</DropdownItem>
        </Dropdown>
    </nav>
</template>

<style lang="scss">
nav {
    display: flex;
    align-items: center;
    background-color: var(--background-accent-color);
    width: 100%;
    height: 4rem;
    overflow-x: clip;
    z-index: 1;
    user-select: none;
}

.navbar-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    aspect-ratio: 1/1;
    margin: 0.5rem;
    height: calc(100% - 1rem);
    z-index: 1;
}

.navbar-logo {
    height: 100%;
}
</style>
