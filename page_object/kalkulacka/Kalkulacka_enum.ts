/*Literal content would ideally be loaded dynamically from dictionary based
on current tested localisation. */

export enum SpusobVytapeni {
    tuhaPaliva = "Kotel na tuhá paliva",
    elektrickyKotel = "Elektrický kotel",
    plynovyKotel = "Plynový kotel",
    tepelneCerpadlo = "Tepelné čerpadlo",
    jiny = "Jiným způsobem"
}

export enum SpusobVytapeniTuhaPaliva {
    prvaDruhaTrieda = "1.–2. třída",
    jiny = "Jiný"

}

export enum SpusobOhrivaniVody {
    elBojler = "Elektrickým bojlerem",
    topnyZdroj = "Topným zdrojem",
    jinySpusob = "Jiným způsobem"
}

export enum PocetOsob {
    jedna = "1",
    dve = "2",
    tri = "3",
    ctyri = "4",
    pet = "5",
    sest = "6",
    vice = "Více"
}

export enum MiraZatepleniDomu {
    vysoka = "Vysokou",
    stredni = "Střední",
    nizka = "Nízkou",
    zadna = "Žádnou"
}

export enum Kraj{
    praha = "Praha",
    jihocesko = "Jihočeský kraj",
    jihomoravsko = "Jihomoravský kraj",
    vysocina = "Kraj Vysočina",
    liberec = "Liberecký kraj",
    karlovarsko = "Karlovarský kraj",
    kralovehradecko = "Královéhradecký kraj",
    moravskoslezko = "Moravskoslezský kraj",
    olomouc = "Olomoucký kraj",
    pardubice = "Pardubický kraj",
    plzen = "Plzeňský kraj",
    stredocesko = "Středočeský kraj",
    ustecko = "Ústecký kraj",
    zlin = "Zlínský kraj",
}

export enum ZnalostTepelnejStraty{
    ano = "Ano",
    nie = "Ne"
}

export enum PritomnostEnergetickyNarocnychSpotrebicov{
    ano = "Ano",
    nie = "Ne"
}