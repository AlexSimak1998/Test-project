<template>
    <div class="header">
        <img src="https://picsum.photos/100/100?grayscale" alt="user logo">
        <span class="header_user">
            <strong>Ирина</strong>
            <p>test@mail.com</p>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    padding: 20px;

    &_user {
        margin-left: 10px;
        strong {
            font-size: 30px;
            color: rgb(87, 87, 87);
        }
     
    }

    img {
        border-radius: 50%;

    }
}
</style>