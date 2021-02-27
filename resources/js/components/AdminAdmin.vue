<template>
    <div class="common-layout">

        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-row>
                    <el-col :span="24">
                        <el-menu
                            :uniqueOpened="true"
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">

                            <el-submenu v-for="menu in menus" index="1">
                                <template #title>
                                    <i class="el-icon-location"></i>
                                    <span>{{menu.name}}</span>
                                </template>
                                <el-menu-item-group v-if="menu.subMenus">
<!--                                    <template #title>分组一</template>-->
                                    <el-menu-item v-for="sub in menu.subMenus" index="1-1">{{sub.name}}</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                        </el-menu>
                    </el-col>
                    </el-row>
                </el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import { Menu } from '../domains/menu'
    export default {
        name: "AdminAdmin.vue",
        data() {
            return {
                menus: Menu,
            }
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
