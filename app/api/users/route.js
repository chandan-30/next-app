export async function GET(req) {
    const users = [
        { id: 1, name: 'sai'},
        { id: 2, name: 'chandan'},
        { id: 3, name: 'yata'},
    ];

    return new Response( JSON.stringify( users ) );
}
