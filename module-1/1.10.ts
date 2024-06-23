{
    // union type:
    type TFrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type TFullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'
    type TDeveloper = TFrontendDeveloper | TFullstackDeveloper
    const newDeveloper : TDeveloper = 'expertDeveloper'


    //intersection  type:
    type FrontendDev = {
        skills: string[],
        designation1: 'Frontend Dev'
    }
    type BackendDev = {
        skills: string[],
        designation2: 'Backend Dev'
    }

    type FullstackDev = FrontendDev & BackendDev;

    const fullstackDev: FullstackDev = {
        skills:['Html','CSS','express'],
        designation1: 'Frontend Dev',
        designation2: 'Backend Dev'
    }

    

}