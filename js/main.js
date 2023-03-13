const { createApp } = Vue;
// console.log(createApp);

createApp({
    data() {
        return {
            message: 'Brown Goose Music Festival 2023',
            link: 'https://picsum.photos/id/117/700/500'
        }
    }
}).mount('#app');