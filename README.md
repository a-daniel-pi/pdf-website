# pdf-website
This is a website that hosts PDFs and their metadata and can display them to the user. 

To set this up, you need to have docker installed and a domain name. Then run `docker compose up` in the directory where you downloaded this. Then navigate to your website, and go to the port 5001 (this can changed in docker-compose.yml) and set up your SSL certificates and the proxy. 

An SSL certificate can be set up in the certificates tab. Set LetsEncrypt with HTTPS and enter your domain name. To set up the proxy, go to the hosts dropdown and set Proxy Hosts. The domain name would be your domain name and the hostname is backend-nodejs and the port is 3000. Then go to the SSL tab in the pop up menu and select Force SSL.

To add new pdfs, just place it in the /backend/pdfs directory and add a metadata file in the /backend/meta directory. The metadata file should have the same name as the pdf but with .json at the end. For example if you have test.pdf, the metadata file will be test.pdf.json. This is an example metadata file:
```
{
    "name": "Insert descriptive name of pdf here",
    "description": "Insert description of pdf here"
}
```
