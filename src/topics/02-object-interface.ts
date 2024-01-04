const skills: string[] = ["Bash", "Counter", "Healing"];

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter"],
}

interface Character {
    name: String;
    hp: Number;
    skills: String[];
    hometown?: String;
}

strider.hometown = "Rivendell";

console.table(strider);
