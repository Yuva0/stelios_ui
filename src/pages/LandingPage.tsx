import React from "react";
import { Button, Card, CodePreview, Link, List, ListItem, Text, useTheme } from "stelios";
import LandingPageGroup from "../components/LandingPageGroup/LandingPageGroup";
import MusicPlayerComp from "../components/MusicPlayer/MusicPlayer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const theme = useTheme().theme!;
    const colorPalette = theme.colorPalette;
    const navigate = useNavigate();

    const defaultColor = colorPalette.primary.appearance === "light" ? "black" : "white";

    const _onClickGetStarted = () => {
        navigate("/components/button")
    }

    const _onClickViewStorybook = () => {
        window.open("https://yuva0.github.io/stelios/storybook")
    }

    return (
    <div
        style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:
            colorPalette.primary.appearance === "light" ? "white" : "black",
        }}
    >
        <div
        style={{
            marginTop: "8rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: 'wrap'
        }}
        >
        <div
            style={{
            maxWidth: "400px",
            flexWrap: "wrap",
            lineHeight: "4rem",
            textAlign: "center",
            }}
        >
            <Text color="component" variant="span" fontSize="48px">
            Stelios{" "}
            </Text>
            <Text
            preciseColor={defaultColor}
            variant="span"
            fontSize="48px"
            >
            Design
            </Text>
        </div>
        <div
            style={{ maxWidth: "800px", textAlign: "justify", marginTop: "8px", flexWrap: "wrap", padding: "0 2rem", boxSizing: "border-box" }}
        >
            <Text
            color="secondary"
            variant="span"
            size="medium"
            style={{ textAlign: "justify" }}
            >
            Stelios UI is an open-source React component library that provides a
            customizable design system.
            </Text>
        </div>
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            marginTop: "32px",
            }}
        >
            <Button
            variant="contained"
            color="component"
            size="medium"
            style={{ marginTop: "16px" }}
            onClick={_onClickGetStarted}
            >
            Get Started
            </Button>
            <Button
            variant="outlined"
            color="component"
            size="medium"
            style={{ marginTop: "16px", marginLeft: "16px" }}
            onClick={_onClickViewStorybook}
            >
            View Storybook
            </Button>
        </div>
        <div
            style={{
            marginTop: "64px",
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent:"center"
            }}
        >
            <Card
            width="280px"
            header={
                <Text disableColor size="medium">
                Palette using one color
                </Text>
            }
            variant="neumorph"
            color="component"
            >
            <Text size="small" color="secondary">
                Create a color palette using just one color. This includes accent
                contrast and backgrounds, ensuring consistent and adaptable
                styling across all apps. Created using Radix UI.
            </Text>
            </Card>
            <Card
            width="280px"
            header={
                <Text disableColor size="medium">
                50 components and more!
                </Text>
            }
            variant="neumorph"
            color="component"
            >
            <Text size="small" color="secondary">
                Stelios UI provides over 50 components and more! This includes
                buttons, cards, modals, and more. All components are customizable
                and can be used in any React project.
            </Text>
            </Card>
            <Card
            width="280px"
            header={
                <Text disableColor size="medium">
                Accessibility First Approach
                </Text>
            }
            variant="neumorph"
            color="component"
            >
            <Text size="small" color="secondary">
                Stelios UI is built with accessibility in mind. All components are
                accessible and can be used in any project. This includes keyboard
                navigation, screen reader support, and more.
            </Text>
            </Card>
        </div>
        </div>
        <div style={{marginTop:"240px", borderRadius: "8px", background: "lightgrey", maxWidth: "1600px"}}>
            <LandingPageGroup />
        </div>
        <div style={{marginTop: "120px", display:"flex", flexDirection: "row", maxWidth: "1600px", flexWrap: "wrap"}}>
            <div style={{flex: "1 0 40%", width: "100%", padding: "2rem 4rem", display:"flex", gap: "1rem", flexDirection: "column"}}>
                <Text color="component" variant="label" fontSize="36px"> Newer Variants Added </Text>
                <Text color={defaultColor} variant="paragraph" style={{textAlign: "justify", marginTop: "1rem"}}> Introducing a groundbreaking design system that pushes the boundaries of customization! Unlike anything you've seen before, this system brings in fresh, innovative variants that redefine creativity and adaptability. Tailored for modern UI needs, it's perfect for developers looking to break free from the usual constraints and deliver something truly unique. Get ready to elevate your projects with a design system that's as flexible as your imagination! </Text>
                <Text color={defaultColor} variant="paragraph" style={{textAlign: "justify"}}> This design system is all about unlocking endless possibilities. With never-before-seen variants, you’ll have the tools to craft interfaces that stand out while staying perfectly responsive and accessible. It's built with flexibility in mind, making it effortless to adapt for any use case, from sleek mobile apps to complex web platforms. Whether you’re a seasoned designer or a developer looking to experiment with bold new styles, this system empowers you to create dynamic, future-proof experiences! </Text>
            </div>
            <div style={{display:"flex", flex: "1 0 40%", width: "100%", justifyContent: "center", alignItems: "center"}}>
                <MusicPlayerComp/>
            </div>
        </div>
        <div style={{backgroundColor: colorPalette.primary.accentScale[8], width: "100%", color: colorPalette.primary.accentContrast, marginTop: "160px", justifyContent: "center", display: "flex", padding: "60px 0", gap: "5rem"}}>
            <List variant="none" size="large" title={<Text preciseColor="white" size="large">Links</Text>} color="white">
                <ListItem><Link variant="underline" preciseColor="white" href="/" size="medium">Home</Link></ListItem>
                <ListItem><Link variant="underline" preciseColor="white" href="/components/button" size="medium">Components</Link></ListItem>
                <ListItem><Link variant="underline" preciseColor="white" href="https://yuva0.github.io/stelios/storybook" target="_blank" size="medium">Storybook</Link></ListItem>
            </List>
            <List variant="none" size="large" title={<Text preciseColor="white" size="large">Socials</Text>}>
                <ListItem><Link variant="underline" preciseColor="white" href="https://www.linkedin.com/in/tanuj-sengupta-872a05129/" size="medium" target="_blank">LinkedIn</Link></ListItem>
                <ListItem><Link variant="underline" preciseColor="white" href="https://github.com/yuva0" size="medium" target="_blank">Github</Link></ListItem>
            </List>
            <List variant="none" size="large" title={<Text preciseColor="white" size="large">Projects</Text>}>
            <ListItem><Link variant="underline" preciseColor="white" href="https://yuva0.github.io/react-tutor/" size="medium">React Tutor</Link></ListItem>
            <ListItem><Text preciseColor="white" size="medium">More Upcoming!</Text></ListItem>
            </List>
        </div>
    </div>
    );
};

export default LandingPage;