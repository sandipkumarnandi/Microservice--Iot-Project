import {Guid} from "./guid";


export abstract class RequestModelBase{

	
    private AccessToken!: string;
    private UserName!: string;
    private TenantId!: number;
    private IsRequestFromBackgroundService!: boolean;
    private version!: string;
    public RequestGuid!: string;
    

    // private guid_obj = new Guid();
    // private culture_obj = new CultureInfo();

    RequestModelBase(requestGuid:string){
        this.RequestGuid = requestGuid!=null?requestGuid:"";
    }

	constructor(tenantId:number,requestId:string){
		this.TenantId = tenantId;
		
		this.RequestGuid = requestId;
	}

	

	public getAccessToken(): string {
		return this.AccessToken;
	}

	public getUserName(): string {
		return this.UserName;
	}

	public getTenantId(): number {
		return this.TenantId;
	}

	public getIsRequestFromBackgroundService(): boolean {
		return this.IsRequestFromBackgroundService;
	}

	public getversion(): string {
		return this.version;
	}


	public setAccessToken(value: string) {
		this.AccessToken = value;
	}

	public setUserName(value: string) {
		this.UserName = value;
	}

	public setTenantId(value: number) {
		this.TenantId = value;
	}

	public setIsRequestFromBackgroundService(value: boolean) {
		this.IsRequestFromBackgroundService = value;
	}

	public setversion(value: string) {
		this.version = value;
    }
    
    


}
