import fetch from 'node-fetch';
enum Weapon {
    Classic = 'Classic',
    Shorty = 'Shorty',
    Frenzy = 'Frenzy',
    Ghost = 'Ghost',
    Sheriff = 'Sheriff',
    Stinger = 'Stinger',
    Spectre = 'Spectre',
    Bucky = 'Bucky',
    Judge = 'Judge',
    Bulldog = 'Bulldog',
    Guardian = 'Guardian',
    Phantom = 'Phantom',
    Vandal = 'Vandal',
    Marshal = 'Marshal',
    Operator = 'Operator',
    Ares = 'Ares',
    Odin = 'Odin',
    Melee = 'Melee'
}
interface IResponse {
    status: number;
    data: {
        uuid: string;
        displayName: string;
        themeUuid: string;
        contentTierUuid: string;
        displayIcon: string;
        wallpaper: string;
        assetPath: string;
        chroma: any[];
        levels: any[];
    }[];
}

class SkinType {
    color: string;
    name: string;
    constructor (color: string, name: string){
        this.color = color
        this.name = name
    }
    getSkinInfo(uuid: string) {
        console.log(`UUID: ${uuid} (Skin: ${this.color}| Weapon: ${this.name})`)
    }
}
class SkinFactory {
    static skinTypes: Array<SkinType> = []
    static getSkinType(color: string, name: string) {
        let skinType = this.skinTypes.find((value) => {
            return value.color == color && value.name == name;
        })
        if (skinType == undefined) {
            skinType = new SkinType(color, name);
            this.skinTypes.push(skinType);
        }
        return skinType;
    }
}
class Skin {
    uuid: string;
    skinType: SkinType;
    constructor (uid: string, skinType: SkinType) {
        this.uuid = uid;
        this.skinType = skinType;
    }
    getSkin() {
        this.skinType.getSkinInfo(this.uuid);
    }
}
class Skins {
    skins: Array<Skin> = []
    addSkin(uuid: string, color: string, name: string) {
        let skinType = SkinFactory.getSkinType(color, name)
        let skin = new Skin(uuid, skinType)
        this.skins.push(skin)
    }
    sendSkinInfo() {
        for (let skin of this.skins) {
            skin.getSkin()
        }
    }
}

(async () => {
    let skins = new Skins();
    const response = (await (await fetch('https://valorant-api.com/v1/weapons/skins')).json()) as IResponse;
    const filterResponse = response.data.reduce(
        (acc, {uuid,displayName}) => ({
            ...acc,
            [displayName]: uuid,
        }),
        {}
    );
    const arrayEntries = Object.entries<string>(filterResponse);
    arrayEntries.forEach(([key, value]) => {
        if (key.includes(Weapon.Classic)) {
            const splitter = key.split(Weapon.Classic);
            skins.addSkin(value, splitter[0], Weapon.Classic);
        }
        else if (key.includes(Weapon.Shorty)) {
            const splitter = key.split(Weapon.Shorty);
            skins.addSkin(value, splitter[0], Weapon.Shorty);
        }
        else if (key.includes(Weapon.Frenzy)) {
            const splitter = key.split(Weapon.Frenzy);
            skins.addSkin(value, splitter[0], Weapon.Frenzy);
        }
        else if (key.includes(Weapon.Ghost)) {
            const splitter = key.split(Weapon.Ghost);
            skins.addSkin(value, splitter[0], Weapon.Ghost);
        }
        else if (key.includes(Weapon.Sheriff)) {
            const splitter = key.split(Weapon.Sheriff);
            skins.addSkin(value, splitter[0], Weapon.Sheriff);
        }
        else if (key.includes(Weapon.Stinger)) {
            const splitter = key.split(Weapon.Stinger);
            skins.addSkin(value, splitter[0], Weapon.Stinger);
        }
        else if (key.includes(Weapon.Spectre)) {
            const splitter = key.split(Weapon.Spectre);
            skins.addSkin(value, splitter[0], Weapon.Spectre);
        }
        else if (key.includes(Weapon.Bucky)) {
            const splitter = key.split(Weapon.Bucky);
            skins.addSkin(value, splitter[0], Weapon.Bucky);
        }
        else if (key.includes(Weapon.Judge)) {
            const splitter = key.split(Weapon.Judge);
            skins.addSkin(value, splitter[0], Weapon.Judge);
        }
        else if (key.includes(Weapon.Bulldog)) {
            const splitter = key.split(Weapon.Bulldog);
            skins.addSkin(value, splitter[0], Weapon.Bulldog);
        }
        else if (key.includes(Weapon.Guardian)) {
            const splitter = key.split(Weapon.Guardian);
            skins.addSkin(value, splitter[0], Weapon.Guardian);
        }
        else if (key.includes(Weapon.Phantom)) {
            const splitter = key.split(Weapon.Phantom);
            skins.addSkin(value, splitter[0], Weapon.Phantom);
        }
        else if (key.includes(Weapon.Vandal)) {
            const splitter = key.split(Weapon.Vandal);
            skins.addSkin(value, splitter[0], Weapon.Vandal);
        }
        else if (key.includes(Weapon.Marshal)) {
            const splitter = key.split(Weapon.Marshal);
            skins.addSkin(value, splitter[0], Weapon.Marshal);
        }
        else if (key.includes(Weapon.Operator)) {
            const splitter = key.split(Weapon.Operator);
            skins.addSkin(value, splitter[0], Weapon.Operator);
        }
        else if (key.includes(Weapon.Ares)) {
            const splitter = key.split(Weapon.Ares);
            skins.addSkin(value, splitter[0], Weapon.Ares);
        }
        else if (key.includes(Weapon.Odin)) {
            const splitter = key.split(Weapon.Odin);
            skins.addSkin(value, splitter[0], Weapon.Odin);
        }
        else {
            skins.addSkin(value, `${key} `, Weapon.Melee);
        }
    })
    skins.sendSkinInfo();
})()
