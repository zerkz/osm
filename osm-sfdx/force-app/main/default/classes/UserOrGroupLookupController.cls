@SuppressWarnings('PMD.ApexCRUDViolation')
public with sharing class UserOrGroupLookupController {
    private static String USER_ICON = 'utility:user';
    private static String GROUP_ICON = 'utility:group';

    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> search(String searchTerm, List<String> selectedIds) {
        searchTerm = '*' + searchTerm + '*';

        List<List<SObject>> searchResults = [
            FIND :searchTerm
            IN ALL FIELDS
            RETURNING
                Group(Id, DeveloperName, Name),
                User(Id, Name, UserName)
            LIMIT 200
            ];

        List<LookupSearchResult> results = new List<LookupSearchResult>();

   
        List<Group> grps = (List<Group>) searchResults[0];
        for (Group grp : grps) {
            String subtitle = grp.DeveloperName;
            results.add(new LookupSearchResult(grp.Id, 'Group', GROUP_ICON, grp.Name, grp.DeveloperName));
        }

        List<User> users = (List<User>) searchResults[1];
        for (User user : users) {
            results.add(
                new LookupSearchResult(
                    user.Id,
                    'User',
                    USER_ICON,
                    user.Name,
                    user.UserName
                )
            );
        }

        return results;
    }


    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> retrieveIds(List<String> selectedIds) {
        List<User> users = [SELECT  Id, Name, UserName from User where Id in :selectedIds];
        List<Group> grps = [SELECT Id, Name, DeveloperName from Group where Id in :selectedIds];

        List<LookupSearchResult> results = new List<LookupSearchResult>();

   

        for (Group grp : grps) {
            String subtitle = grp.DeveloperName;
            results.add(new LookupSearchResult(grp.Id, 'Group', GROUP_ICON, grp.Name, grp.DeveloperName));
        }

        for (User user : users) {
            results.add(
                new LookupSearchResult(
                    user.Id,
                    'User',
                    USER_ICON,
                    user.Name,
                    user.UserName
                )
            );
        }

        return results;
    }
}
