<template>
    <div>
        <ul class="flex-layout category-head" id="category-head" style="">
            <li class="flex" style="" id="brand_cat" searchtype="brand">品牌团</li>
            <li class="flex" style="" data-ic="1" searchtype="goods">美体个护</li>
            <li class="flex hover" style="" data-ic="4" searchtype="goods">食品保健</li>
            <li class="flex" style="" data-ic="7" searchtype="goods">婴幼儿</li>
            <li class="flex" style="" data-ic="10" searchtype="goods">百货</li>
            <li class="flex" style="" data-ic="13" searchtype="goods">数码</li>
        </ul>
    </div>
</template>

<script></script>

<style scoped>
    #category-head {
        width: 100%;
        display: inline;
        white-space: nowrap;
        overflow-x: scroll;
        float: left;
        overflow-y: hidden
    }

    #category-head li {
        display: inline-block;
        width: 80px;
        height: 30px;
        padding-left: 10px;
    }
</style>