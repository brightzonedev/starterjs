import path from 'path';

export default = {
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'src')
    },
    plugins: [],
    
};