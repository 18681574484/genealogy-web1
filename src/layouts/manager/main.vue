<template>
    <Layout style="height: 100%" class="main">
        <Sider hide-trigger collapsible :width="256" :collapsed-width="48" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
                <div class="logo-con">
                    <img :src="api.imgurl(siteinfo.totemPicSrc)">
                    <div v-if="!collapsed">{{siteinfo.siteName}}</div>
                </div>
            </side-menu>
        </Sider>
        <Layout>
            <Header class="header-con">
                <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
                    <user :user-avator="userAvator"/>
                    <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
                </header-bar>
            </Header>
            <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <div class="tag-nav-wrapper">
                        <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
                    </div>
                    <Content class="content-wrapper">
                        <keep-alive :include="cacheList">
                            <router-view/>
                        </keep-alive>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import SideMenu from "./c/side-menu";
import HeaderBar from "./c/header-bar";
import TagsNav from "./c/tags-nav";
import User from "./c/user.vue";
import Fullscreen from "./c/fullscreen.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getNewTagList, getNextRoute, routeEqual } from "@/libs/util";
export default {
    name: "Main",
    components: {
        SideMenu,
        HeaderBar,
        TagsNav,
        Fullscreen,
        User
    },
    data() {
        return {
            collapsed: false,
            isFullscreen: false,
            siteinfo: {}
        };
    },
    computed: {
        admin() {
            return this.$store.state.admin;
        },
        user() {
            return this.$store.state.user;
        },
        tagNavList() {
            return this.admin.tagNavList;
        },
        tagRouter() {
            return this.admin.tagRouter;
        },
        userAvator() {
            return this.user.avatorImgPath;
        },
        cacheList() {
            return this.tagNavList.length
                ? this.tagNavList
                      .filter(item => !(item.meta && item.meta.notCache))
                      .map(item => item.name)
                : [];
        },
        menuList() {
            return this.$store.getters.menuList;
        }
    },
    mounted() {
        /**
         * @description 初始化设置面包屑导航和标签导航
         */
        this.setTagNavList();
        this.addTag({
            route: this.admin.homeRoute
        });
        this.setBreadCrumb(this.$route);
        if (!this.tagNavList.find(item => item.name === this.$route.name)) {
            this.$router.push({
                name: "home"
            });
        }
        this.getSiteinfo();
    },
    methods: {
        ...mapMutations(["setBreadCrumb", "setTagNavList", "addTag"]),
        getSiteinfo() {
            let url = [
                "",
                this.api.admin.county.base + this.api.admin.county.site_info,
                this.api.admin.province.base + this.api.admin.province.site_info
            ];
            this.api
                .post(url[this.admin.step], {
                    siteId: this.admin.id
                })
                .then(res => {
                    if (res.code == 200) {
                        this.siteinfo = res.data;
                    }
                });
        },
        turnToPage(route) {
            let { name, params, query } = {};
            if (typeof route === "string") name = route;
            else {
                name = route.name;
                params = route.params;
                query = route.query;
            }
            if (name.indexOf("isTurnByHref_") > -1) {
                window.open(name.split("_")[1]);
                return;
            }
            this.$router.push({
                name,
                params,
                query
            });
        },
        handleCollapsedChange(state) {
            this.collapsed = state;
        },
        handleCloseTag(res, type, route) {
            if (type === "all") {
                this.turnToPage("home");
            } else if (routeEqual(this.$route, route)) {
                if (type !== "others") {
                    const nextRoute = getNextRoute(this.tagNavList, route);
                    this.$router.push(nextRoute);
                }
            }
            this.setTagNavList(res);
        },
        handleClick(item) {
            this.turnToPage(item);
        }
    },
    watch: {
        $route(newRoute) {
            const { name, query, params, meta } = newRoute;
            this.addTag({
                route: { name, query, params, meta },
                type: "push"
            });
            this.setBreadCrumb(newRoute);
            this.setTagNavList(getNewTagList(this.tagNavList, newRoute));
            this.$refs.sideMenu.updateOpenName(newRoute.name);
        }
    }
};
</script>
<style lang="scss" scoped>
.main {
    .logo-con {
        height: 64px;
        padding: 16px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #002140;
        display: flex;
        justify-content: center;
        font-weight: 600;
        img {
            height: 32px;
        }
        div {
            margin: 0 16px;
            line-height: 32px;
        }
    }
    .header-con {
        background: #fff;
        padding: 0 20px;
        width: 100%;
    }
    .main-layout-con {
        height: 100%;
        overflow: hidden;
    }
    .main-content-con {
        height: calc(100% - 60px);
        overflow: hidden;
    }
    .tag-nav-wrapper {
        padding: 0;
        height: 40px;
        background: #f0f0f0;
    }
    .content-wrapper {
        padding: 18px;
        height: calc(100% - 80px);
        overflow: auto;
    }
    .left-sider {
        .ivu-layout-sider-children {
            overflow-y: scroll;
            margin-right: 0;
        }
    }
}
.ivu-menu-item {
    & > i {
        margin-right: 8px !important;
    }
}
.ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
    margin-right: 8px !important;
}
.collased-menu-dropdown {
    width: 100%;
    margin: 0;
    line-height: normal;
    padding: 7px 0 6px 16px;
    clear: both;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
        background: rgba(100, 100, 100, 0.1);
    }
    & * {
        color: #515a6e;
    }
    .ivu-menu-item > i {
        margin-right: 12px !important;
    }
    .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
        margin-right: 8px !important;
    }
}

.ivu-select-dropdown.ivu-dropdown-transfer {
    max-height: 400px;
}
</style>
