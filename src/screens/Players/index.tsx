import { useState } from "react";
import { FlatList } from "react-native";

import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPLayers] = useState([])

    return (
        <Container>
            <Header showBackButton />
            <Highlight 
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon 
                    icon="add"
                    type="PRIMARY" 
                />
            </Form>
            <HeaderList>
                <FlatList 
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            title={item} 
                            isActive={item === team} 
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    { players.length }
                </NumberOfPlayers>
            </HeaderList>
        </Container>
    );
}