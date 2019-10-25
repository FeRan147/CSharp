import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
export var ROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        rtlTitle: "لوحة القيادة",
        icon: "icon-chart-pie-36",
        class: ""
    },
    {
        path: "/icons",
        title: "Icons",
        rtlTitle: "الرموز",
        icon: "icon-atom",
        class: ""
    },
    {
        path: "/maps",
        title: "Maps",
        rtlTitle: "خرائط",
        icon: "icon-pin",
        class: ""
    },
    {
        path: "/notifications",
        title: "Notifications",
        rtlTitle: "إخطارات",
        icon: "icon-bell-55",
        class: ""
    },
    {
        path: "/user",
        title: "User Profile",
        rtlTitle: "ملف تعريفي للمستخدم",
        icon: "icon-single-02",
        class: ""
    },
    {
        path: "/tables",
        title: "Table List",
        rtlTitle: "قائمة الجدول",
        icon: "icon-puzzle-10",
        class: ""
    },
    {
        path: "/typography",
        title: "Typography",
        rtlTitle: "طباعة",
        icon: "icon-align-center",
        class: ""
    },
    {
        path: "/rtl",
        title: "RTL Support",
        rtlTitle: "ار تي ال",
        icon: "icon-world",
        class: ""
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = __decorate([
        Component({
            selector: "app-sidebar",
            templateUrl: "./sidebar.component.html",
            styleUrls: ["./sidebar.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map