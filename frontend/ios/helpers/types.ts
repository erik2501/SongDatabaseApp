import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    SongScreen: { songID: number };
};

export type SongScreenProps = StackScreenProps<RootStackParamList, 'SongScreen'>;

export type Song = {
    songID: number,
    songName: string,
    artistName: string,
    imageURL: string
}

export type SongAllData = {
    songID: number,
    songName: string,
    artistName: string,
    durationMS: number,
    year: number,
    energy: number,
    imageURL: string
}

export interface reviewProp {
    userName: string,
    star: number,
    description: string,
}