#!/usr/bin/env python3

import json
import os
import sys

def snarf_json(filename):
    with open(filename, 'r', encoding='utf-8') as fdin:
        return json.load(fdin)

def get_domain_names(tree):
    result = {}
    for cat in tree['categories']:
        if cat == 'Content':
            continue
        for entry in tree['categories'][cat]:
            for k in entry.keys():
                for dl in entry[k].keys():
                    for domain in entry[k][dl]:
                        result[domain] = 1
    return sorted(result.keys())

def config_lines(domainlist):
    for entry in domainlist:
        yield '\t\t|| isInDomain(host, "%s")' % entry

def spew_file(filename):
    try:
        os.makedirs(os.path.split(filename)[0])
    except FileExistsError:
        pass
    with NamedTemporaryFile(dir=os.path.dirname(filename), mode='w+',
                            delete=False, encoding='utf-8') as scratch:
        scratch.write(content)
    os.replace(scratch.name, filename)

def template():
    return '''
var noeurope = "DIRECT";

var europe = "PROXY %s:%d";

function isInDomain(host, domain) {
	if (host === domain) { return true; } 
	if (domain.length > host.length) { return false; }
	var comp = host.split('.');
	comp.shift()
	var newhost = comp.join('.');
	return isSubdomain(newhost, domain);
}

function FindProxyForURL(url, host)
{
    host = host.toLowerCase();

	if (0

	// This is where the generated lines go.
%s
	// End of long list of generated lines.
	) {
		return europe;
	} else {
		return noEurope;
	}
}
'''

if __name__ == '__main__':
    host = '127.0.0.1'
    port = 8080
    list_data = snarf_json(sys.argv[1])
    print(template() % (host, port, '\n'.join(config_lines(get_domain_names(list_data)))))

# vim: set expandtab:    
