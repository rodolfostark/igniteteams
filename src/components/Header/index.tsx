import { Container, Logo, BackButton, BackArrowIcon } from "./styles";

import logoImg from "@assets/logo.png"

type HeaderProps = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
    return (
        <Container>
            { showBackButton && (
                <BackButton>
                    <BackArrowIcon />
                </BackButton>
            )}
            <Logo source={logoImg} />
        </Container>
    );
}