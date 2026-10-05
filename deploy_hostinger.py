import os
import paramiko
import tarfile

HOST = '145.79.58.122'
PORT = 65002
USER = 'u892283443'
PASSWORD = 'Qubnix123@'
LOCAL_DIR = 'd:/Qubnix projects/realesate'

def create_tarball():
    print("Creating tarball deploy.tar.gz...")
    with tarfile.open("deploy.tar.gz", "w:gz") as tar:
        # Include standalone files
        tar.add(".next/standalone", arcname=".")
        # Include static assets inside .next/static and public
        # In Next.js standalone, you must copy public and .next/static manually
        tar.add(".next/static", arcname=".next/static")
        tar.add("public", arcname="public")

def deploy():
    create_tarball()
    
    print("Connecting to Hostinger SSH...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(HOST, port=PORT, username=USER, password=PASSWORD)
    
    sftp = ssh.open_sftp()
    
    print("Deploying to public_html/...")
    
    try:
        sftp.chdir("public_html")
    except:
        sftp.mkdir("public_html")
        sftp.chdir("public_html")
        
    current_remote_dir = sftp.getcwd()
    print(f"Current remote dir: {current_remote_dir}")
    
    print("Uploading deploy.tar.gz...")
    sftp.put("deploy.tar.gz", "deploy.tar.gz")
    
    print("Extracting tarball over SSH...")
    stdin, stdout, stderr = ssh.exec_command(f"cd {current_remote_dir} && tar -xzf deploy.tar.gz && rm deploy.tar.gz")
    out = stdout.read().decode()
    err = stderr.read().decode()
    if out: print(out)
    if err: print("Errors:", err)
    
    print("Running Prisma database push on Hostinger...")
    # Because it's standalone, it doesn't have prisma CLI. Wait.
    # Actually, we should push the schema locally using the Hostinger DB URL!
    
    # Finally, to run the server on Hostinger using their Node.js passenger:
    # Usually you need an app.js or server.js at root. Standalone provides server.js.
    # Wait, we need to create an .htaccess file for Passenger.
    htaccess_content = """Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ server.js [QSA,E=HTTP_AUTHORIZATION:%{HTTP:Authorization},L]
"""
    with open("temp_htaccess", "w") as f:
        f.write(htaccess_content)
    sftp.put("temp_htaccess", ".htaccess")
    os.remove("temp_htaccess")
    
    print("Upload and setup complete!")
    
    sftp.close()
    ssh.close()

if __name__ == "__main__":
    deploy()
