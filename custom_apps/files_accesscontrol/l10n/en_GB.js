OC.L10N.register(
    "files_accesscontrol",
    {
    "No rule given" : "No rule given",
    "File access control" : "File access control",
    "Control access to files based on conditions" : "Control access to files based on conditions",
    "Restrict access to files based on factors such as filetype, user group memberships, time and more." : "Restrict access to files based on factors such as filetype, user group memberships, time and more.",
    "Each rule group consists of one or more rules. A request matches a group if all rules evaluate to true. If a request matches at least one of the defined groups, the request is blocked and the file content can not be read or written." : "Each rule group consists of one or more rules. A request matches a group if all rules evaluate to true. If a request matches at least one of the defined groups, the request is blocked and the file content can not be read or written.",
    "Nextcloud's File Access Control app enables administrators to protect data from unauthorized access or modifications.\n\n## How it works\nThe administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.\n\t\t\nAn example would be to deny access to MS Excel/XLSX files owned by the \"Human Resources\" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the \"1st year\" group.\n\t\nLearn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)" : "Nextcloud's File Access Control app enables administrators to protect data from unauthorised access or modifications.\n\n## How it works\nThe administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.\n\t\t\nAn example would be to deny access to MS Excel/XLSX files owned by the \"Human Resources\" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the \"1st year\" group.\n\t\nLearn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)"
},
"nplurals=2; plural=(n != 1);");