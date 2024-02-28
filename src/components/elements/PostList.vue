<template>
    <div v-if="posts.length > 0">
        <div class="modal-overlay" v-if="isVisible" @click="cancel">
            <div class="modal">
                <div class="modal__content">
                    <p>Вы хотите удалить пост?</p>
                    <button class="yes" @click="deletePost">Да</button>
                    <button class="no" @click="cancel">Нет</button>
                </div>
            </div>
        </div>
        <div v-for="post in posts" :key="post.id" class="posts">
            <b>{{ post.id }}</b>
            <div class="post">
                <strong @click="toggleBody(post.id)" class="title">{{ post.title }}</strong>
                <p> id автора: {{ post.userId }}</p>
                <span v-if="selectedPostId === post.id">{{ post.body }}</span>
            </div>

            <Btn @click="prepareDelete(post.id)">
                <span class="my-custom-btn">
                    удалить
                </span>
            </Btn>
        </div>
    </div>

    <p v-else>Идет загрузка...</p>
</template>

<script>
import Btn from './UI/Btn.vue';
export default {
    data() {
        return {
            selectedPostId: null,
            posts: [],
            isVisible: false,
            postToDelete: null,
        }
    },
    mounted() {
        this.fetchPosts()
    },
    methods: {
        toggleBody(id) {
            this.selectedPostId = this.selectedPostId === id ? null : id;
        },
        fetchPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.posts = json;
                    }, 3000);
                })
                .catch(error => console.error('Ошибка при загрузке постов:', error));
        },
        prepareDelete(id) {
            this.postToDelete = id; 
            this.openModal();
        },
        async deletePost() {
            try {
                await fetch(`https://jsonplaceholder.typicode.com/posts/${this.postToDelete}`, {
                    method: 'DELETE',
                });
                this.posts = this.posts.filter(post => post.id !== this.postToDelete);
                this.cancel(); 
            } catch (error) {
                console.error("Ошибка при удалении поста:", error);
            }
        },
        openModal() {
            this.isVisible = true
        },
        cancel() {
            this.isVisible = false
        },
    },
    components: {
        Btn
    }
}
</script>

<style lang="scss">
.modal-overlay {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
}

.modal {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    padding: 20px;
    border-radius: 5px;

    .modal__content {
        text-align: center;

        p {
            margin-bottom: 20px;
        }
    }

    .yes {
        color: rgb(69, 140, 69);
        border: rgb(69, 140, 69) 1px solid;
    }

    .no {
        color: rgb(157, 76, 96);
        border: rgb(157, 76, 96) 1px solid;
    }

    button {
        background: none;
        cursor: pointer;
        margin: 0 10px;
        width: 100px;
        height: 50px;
    }
}

.posts {
    background: var(--color-bg);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid var(--color-solid);
    box-sizing: border-box;
    position: relative;


    .title:hover {
        color: var(--color-blue);
        cursor: pointer;
    }

    p {
        margin: 10px 0 30px;
    }

    .btn {
        margin-left: auto;
        background: none;

    }

    .post {
        flex-grow: 1;

    }

    .my-custom-btn {
        color: rgb(255, 0, 51);
        font-weight: bold;
        cursor: pointer;
    }
}

b {
    margin-right: 30px;
    font-size: 50px;

}</style>