import cors from 'cors'
import dotenv from 'dotenv'
import UserModule from './src/Module/User.module'
import bookModule from './src/Module/book.module'
import { APP, DEFAULT_URL } from './src/app'

dotenv.config()

const PORT = process.env.PORT

APP.listen(PORT, () => {
    console.log(`[SERVER] Server started at http://localhost:${PORT}${DEFAULT_URL}`);
});

APP.use(cors());

bookModule.SendAllData();
bookModule.SendData();
UserModule.SendAllData();
UserModule.SendData()

