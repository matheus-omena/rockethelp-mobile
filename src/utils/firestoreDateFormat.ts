import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export default function dateFormat(timestamp: FirebaseFirestoreTypes.Timestamp){
    if (timestamp) {
        const date = new Date(timestamp.toDate());
        const day = date.toLocaleDateString('pt-BR');        
        const hour = date.toLocaleDateString('pt-BR');

        return `${day} às ${hour}`
    }
}