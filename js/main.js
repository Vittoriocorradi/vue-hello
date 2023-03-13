const { createApp } = Vue;
// console.log(createApp);

createApp({
    data() {
        return {
            message: 'Il mio primo titolo'
        }
    }
}).mount('#app');