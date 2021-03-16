import { createContext, ReactNode, useContext, useState } from "react";

interface IProps {
    children: ReactNode
}

interface GenreIdContextData {
    selectedGenreId: number;
    setSelectedGenreId: (id: number) => void;
}

const GenreIdContext = createContext<GenreIdContextData>({} as GenreIdContextData);

export function GenreIdProvider({ children }: IProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1)
    return (
        <GenreIdContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
            {children}
        </GenreIdContext.Provider>
    )
}
export const useGenre = () => useContext(GenreIdContext);

