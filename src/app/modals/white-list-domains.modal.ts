export class WhiteListDomains {
  constructor(
    public WhitelistDomainId: number,
    public DomainName: string,
    public CreatedBy: string,
    public CreatedOn: Date,
    public DeactivatedDate: Date
  ) { }
}