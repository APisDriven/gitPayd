export default {
    Query:{
        where(){
            return{
                message: "here",
                timestamp: new Date().toISOString(),
            };
        },
    },
};