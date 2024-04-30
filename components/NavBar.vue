<script lang="ts" setup>
const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
    <nav :class="isMenuOpen ? 'expanded' : null">
        <div>
            <div class="navbar-section">
                <NavHamburgerMenu :toggle-menu="toggleMenu" :style="isMenuOpen ? 'rotate: 90deg' : null" />
            </div>
            <div class="navbar-section">
                <RouterLink to="/" class="navbar-title">
                    <img class="navbar-logo" alt="The Finite Doctor logo" src="/image/icon/the-finite-doctor.png" />
                </RouterLink>
            </div>
            <div class="navbar-section" />
        </div>
        <div class="expanded-menu-wrapper" v-if="isMenuOpen">
            <div class="expanded-menu">
                <RouterLink to="/blog" class="navbar-title">Blog</RouterLink>
                <RouterLink to="/" class="navbar-title">Projects</RouterLink>
                <RouterLink to="/ez80/opcode" class="navbar-title">EZ80</RouterLink>
                <RouterLink to="/" class="navbar-title">About</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
nav {
    position: sticky;
    background-color: var(--background-accent-color);
    z-index: 1;
    user-select: none;
    transition: all 1000ms;

    >div,
    .expanded-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        height: 4rem;
    }
}

.expanded-menu-wrapper {
    position: absolute;
    margin-top: 4em;
    background-color: var(--background-accent-color);
}

nav,
.expanded-menu-wrapper {
    top: 0px;
    width: 100%;
}

.expanded-menu {
    width: 100%;
    position: sticky;
    overflow-x: scroll;
}

.navbar-title {
    align-self: center;
    display: flex;
    flex-direction: column;
    aspect-ratio: 1/1;
    margin: 0.5rem;
    height: calc(100% - 1rem);
    z-index: 1;
}

.navbar-logo {
    height: 100%;
}

.navbar-section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
