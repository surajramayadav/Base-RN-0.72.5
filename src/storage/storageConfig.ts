
import { MMKV } from 'react-native-mmkv'

const USER_DIRECTORY = "tmp"

export const Storage = new MMKV({
    id: `storage`,
    path: `${USER_DIRECTORY}/storage`,
    encryptionKey: 'instant'
})
