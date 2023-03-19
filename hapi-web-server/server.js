const Hapi = require('@hapi/hapi');

const init = async()=> {
    const server = Hapi.server({
        port : 5000,
        host : 'localhost'

    });
    await server.start();
    console.log('server berjalan di',server.info.uri);
};
ProcessingInstruction.on('unhandledRejection',(err)=>{
    console.log(err);
    Process.exit(1);
});
init();