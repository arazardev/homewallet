
<h1 class="text-center text-3xl font-extrabold"><slot/></h1>

<style>
    h1 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-top: 30px;
        font-size: 50px;
        color: rgb(159, 175, 190);
        font-weight:100;
        letter-spacing:10px;
        text-transform:uppercase;
    }
    h1:after {
        width: 100px;
        height: 1px;
        display: block;
        content: "";
        position: relative;
        margin-top: 25px;
        left: 50%;
        margin-left: -50px;
        background-color: rgb(159, 175, 190);
    }
</style>