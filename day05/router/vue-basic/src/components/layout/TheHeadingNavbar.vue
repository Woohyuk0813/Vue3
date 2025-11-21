<script setup>
import { RouterLink, useRouter } from 'vue-router';
import IconHome from '@/components/icons/IconHome.vue';
import IconBoard from '@/components/icons/IconBoard.vue';
import IconPicture from '@/components/icons/IconPicture.vue';
import IconFile from '@/components/icons/IconFile.vue';
import DropDownIconMenuSlot from '@/components/common/DropDownIconMenuSlot.vue';
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/mmcafe.png"
          class="rounded mx-auto d-block"
          ₩
          id="logo"
          alt="..."
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Router 기본
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link to="/r01/board" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link to="/r01/picture" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconPicture></IconPicture>
                    </template>
                    <template v-slot:label> 사진자랑 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link to="/r01/file" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconFile></IconFile>
                    </template>
                    <template v-slot:label> 파일공유 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
