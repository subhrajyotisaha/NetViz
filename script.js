// Flow Data Definitions with Increased Detail
const flows = {
    browsing: [
        { sender: 'client', protocol: 'DNS', desc: 'DNS Query (A Record)', details: ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 48151\n;; flags: rd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;{url}. IN A\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags:; udp: 1232', icon: 'fa-magnifying-glass', server: 'DNS Server', serverIp: '8.8.8.8' },
        { sender: 'server', protocol: 'DNS', desc: 'DNS Response', details: ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 48151\n;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 2, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;{url}. IN A\n\n;; ANSWER SECTION:\n{url}. 300 IN A 203.0.113.42\n\n;; AUTHORITY SECTION:\n{url}. 86400 IN NS ns1.{url}.\n{url}. 86400 IN NS ns2.{url}.', icon: 'fa-reply', server: 'DNS Server', serverIp: '8.8.8.8' },
        { sender: 'client', protocol: 'HTTP', desc: 'HTTP GET Request', details: 'GET / HTTP/1.1\nHost: {url}\nConnection: keep-alive\nCache-Control: max-age=0\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8\nSec-Fetch-Site: none\nSec-Fetch-Mode: navigate\nSec-Fetch-User: ?1\nSec-Fetch-Dest: document\nAccept-Encoding: gzip, deflate, br\nAccept-Language: en-US,en;q=0.9', icon: 'fa-arrow-right', server: 'Web Server', serverIp: '203.0.113.42' },
        { sender: 'server', protocol: 'HTTP', desc: 'HTTP 200 OK Response', details: 'HTTP/1.1 200 OK\nDate: {date}\nServer: Apache/2.4.41 (Ubuntu)\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nX-Content-Type-Options: nosniff\nX-Frame-Options: SAMEORIGIN\nContent-Type: text/html; charset=UTF-8\nContent-Encoding: gzip\nContent-Length: 1256\nConnection: keep-alive\n\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Welcome to {url}</title>\n  </head>\n  <body>\n    <h1>Success! Page loaded securely.</h1>\n  </body>\n</html>', icon: 'fa-file-code', server: 'Web Server', serverIp: '203.0.113.42' }
    ],
    mail: [
        { sender: 'client', protocol: 'DNS', desc: 'DNS Query (MX Record)', details: ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 19283\n;; flags: rd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;{domain}. IN MX', icon: 'fa-magnifying-glass', server: 'DNS Server', serverIp: '8.8.8.8' },
        { sender: 'server', protocol: 'DNS', desc: 'DNS Response', details: ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 19283\n;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 2\n\n;; ANSWER SECTION:\n{domain}. 3600 IN MX 10 mail.{domain}.\n\n;; ADDITIONAL SECTION:\nmail.{domain}. 3600 IN A 198.51.100.15', icon: 'fa-reply', server: 'DNS Server', serverIp: '8.8.8.8' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP EHLO', details: 'EHLO client.local', icon: 'fa-handshake', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 250 Hello', details: '250-mail.{domain} Hello client.local [203.0.113.1]\n250-SIZE 35882577\n250-8BITMIME\n250-STARTTLS\n250-ENHANCEDSTATUSCODES\n250-PIPELINING\n250 CHUNKING', icon: 'fa-check', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP STARTTLS', details: 'STARTTLS', icon: 'fa-lock', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 220 TLS', details: '220 2.0.0 Ready to start TLS', icon: 'fa-lock', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP EHLO (Post-TLS)', details: 'EHLO client.local\n\n; (Connection is now encrypted via TLS 1.3)', icon: 'fa-handshake', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 250 Hello (Post-TLS)', details: '250-mail.{domain} Hello client.local [203.0.113.1]\n250-SIZE 35882577\n250-8BITMIME\n250-AUTH PLAIN LOGIN\n250 OK', icon: 'fa-check', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP MAIL FROM', details: 'MAIL FROM:<sender@local.host> BODY=8BITMIME', icon: 'fa-envelope', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 250 OK', details: '250 2.1.0 Ok', icon: 'fa-check', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP RCPT TO', details: 'RCPT TO:<{to}>', icon: 'fa-envelope-open', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 250 OK', details: '250 2.1.5 Ok', icon: 'fa-check', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP DATA', details: 'DATA', icon: 'fa-file-lines', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 354', details: '354 End data with <CR><LF>.<CR><LF>', icon: 'fa-thumbs-up', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP Message Payload', details: 'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=local.host; s=2024; t=1726554523;\n        h=from:from:reply-to:subject:subject:date:date:message-id:message-id:\n         to:to:cc:mime-version:mime-version:content-type:content-type;\n        bh=xM6K+t...\nReceived: from client.local (localhost [127.0.0.1])\n        by mail.local.host (Postfix) with ESMTPSA id 4Rz5G\n        for <{to}>; Date: {date}\nMessage-ID: <a1b2c3d4e5f6@local.host>\nDate: {date}\nFrom: Sender <sender@local.host>\nTo: {to}\nSubject: {subject}\nMIME-Version: 1.0\nContent-Type: text/plain; charset="utf-8"\nContent-Transfer-Encoding: 7bit\n\n{body}\n.', icon: 'fa-paper-plane', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 250 Queued', details: '250 2.0.0 Ok: queued as 3A9B2C4F091', icon: 'fa-box-archive', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'client', protocol: 'SMTP', desc: 'SMTP QUIT', details: 'QUIT', icon: 'fa-door-open', server: 'Mail Server', serverIp: '198.51.100.15' },
        { sender: 'server', protocol: 'SMTP', desc: 'SMTP 221 Bye', details: '221 2.0.0 Bye', icon: 'fa-power-off', server: 'Mail Server', serverIp: '198.51.100.15' }
    ],
    streaming: [
        { sender: 'client', protocol: 'DNS', desc: 'DNS Query (A Record)', details: ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 59201\n;; flags: rd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;stream.media.com. IN A', icon: 'fa-magnifying-glass', server: 'DNS Server', serverIp: '8.8.8.8' },
        { sender: 'server', protocol: 'DNS', desc: 'DNS Response', details: ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 59201\n;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1\n\n;; ANSWER SECTION:\nstream.media.com. 60 IN A 104.18.23.119\nstream.media.com. 60 IN A 104.18.23.120', icon: 'fa-reply', server: 'DNS Server', serverIp: '8.8.8.8' },
        { sender: 'client', protocol: 'HTTP', desc: 'GET Master Manifest', details: 'GET /hls/playlist.m3u8 HTTP/2\nHost: stream.media.com\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAccept: application/vnd.apple.mpegurl, application/x-mpegURL, */*\nAccept-Encoding: gzip, deflate, br\nConnection: keep-alive\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: same-origin', icon: 'fa-list', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'server', protocol: 'HTTP', desc: '200 OK (Master Manifest)', details: 'HTTP/2 200 OK\nDate: {date}\nContent-Type: application/vnd.apple.mpegurl\nContent-Length: 326\nX-Cache: HIT\nCache-Control: max-age=5, public\nAccess-Control-Allow-Origin: *\n\n#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080,CODECS="avc1.640028,mp4a.40.2"\n1080p/index.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1280x720,CODECS="avc1.4d401f,mp4a.40.2"\n720p/index.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=854x480,CODECS="avc1.42c01e,mp4a.40.2"\n480p/index.m3u8', icon: 'fa-file-lines', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'client', protocol: 'HTTP', desc: 'GET Media Playlist', details: 'GET /hls/{quality}/index.m3u8 HTTP/2\nHost: stream.media.com\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAccept: application/vnd.apple.mpegurl\nConnection: keep-alive', icon: 'fa-list-ol', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'server', protocol: 'HTTP', desc: '200 OK (Media Playlist)', details: 'HTTP/2 200 OK\nDate: {date}\nContent-Type: application/vnd.apple.mpegurl\nX-Cache: HIT\nCache-Control: max-age=2, public\nAccess-Control-Allow-Origin: *\n\n#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:4\n#EXT-X-MEDIA-SEQUENCE:1284\n#EXTINF:4.000,\nseg_1284.ts\n#EXTINF:4.000,\nseg_1285.ts\n#EXTINF:4.000,\nseg_1286.ts', icon: 'fa-file-lines', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'client', protocol: 'HTTP', desc: 'GET Segment 1284', details: 'GET /hls/{quality}/seg_1284.ts HTTP/2\nHost: stream.media.com\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAccept: */*\nConnection: keep-alive', icon: 'fa-film', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'server', protocol: 'HTTP', desc: '200 OK (Video Data)', details: 'HTTP/2 200 OK\nDate: {date}\nContent-Type: video/mp2t\nContent-Length: 1548576\nX-Cache: HIT\nCache-Control: max-age=31536000, public\nAccess-Control-Allow-Origin: *\n\n00000000  47 40 00 10 00 00 b0 0d  00 01 c1 00 00 00 01 e0  |G@..............|\n00000010  1f 00 04 2c bd d0 c9 ff  ff ff ff ff ff ff ff ff  |...,............|\n00000020  ff ff ff ff ff ff ff ff  ff ff ff ff ff ff ff ff  |................|\n00000030  ff ff ff ff ff ff ff ff  ff ff ff ff ff ff ff ff  |................|\n[... 1.54 MB of MPEG-TS Binary Stream Data ...]', icon: 'fa-video', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'client', protocol: 'HTTP', desc: 'GET Segment 1285', details: 'GET /hls/{quality}/seg_1285.ts HTTP/2\nHost: stream.media.com\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAccept: */*\nConnection: keep-alive', icon: 'fa-film', server: 'Media CDN', serverIp: '104.18.23.119' },
        { sender: 'server', protocol: 'HTTP', desc: '200 OK (Video Data)', details: 'HTTP/2 200 OK\nDate: {date}\nContent-Type: video/mp2t\nContent-Length: 1550212\nX-Cache: HIT\nCache-Control: max-age=31536000, public\nAccess-Control-Allow-Origin: *\n\n00000000  47 40 00 10 00 00 b0 0d  00 01 c1 00 00 00 01 e0  |G@..............|\n00000010  2a 8f 4b 3c 9d d0 c9 ff  ff ff ff ff ff ff ff ff  |*.K<............|\n00000020  ff ff ff ff ff ff ff ff  ff ff ff ff ff ff ff ff  |................|\n00000030  ff ff ff ff ff ff ff ff  ff ff ff ff ff ff ff ff  |................|\n[... 1.55 MB of MPEG-TS Binary Stream Data ...]', icon: 'fa-video', server: 'Media CDN', serverIp: '104.18.23.119' }
    ]
};

// UI State
let currentFlow = [];
let currentStep = -1;
let isPlaying = false;
let playInterval = null;
let currentContext = {};

// DOM Elements
const activityLog = document.getElementById('activity-log');
const timelineContainer = document.getElementById('timeline-container');
const playPauseBtn = document.getElementById('ctrl-playpause');
const prevBtn = document.getElementById('ctrl-prev');
const nextBtn = document.getElementById('ctrl-next');

// Format text with syntax highlighting
function highlightSyntax(text) {
    let html = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html = html.replace(/^(GET|POST|HTTP\/1\.1|HTTP\/2|EHLO|MAIL FROM|RCPT TO|DATA|QUIT|STARTTLS|200 OK|250 OK|250 Hello|250-.*|220.*|354|221 Bye)/gm, '<span class="hl-cmd">$1</span>');
    html = html.replace(/^([A-Za-z-]+):/gm, '<span class="hl-key">$1</span>:');
    html = html.replace(/^(;; ->>HEADER<<-.*|;; flags:.*|;; QUESTION SECTION:|;; ANSWER SECTION:|;; AUTHORITY SECTION:|;; ADDITIONAL SECTION:|;; OPT PSEUDOSECTION:)/gm, '<span class="hl-key">$1</span>');
    html = html.replace(/^([;\[].*|000000\d0.*)$/gm, '<span class="text-gray-500 italic">$1</span>');
    return html;
}

function logActivity(message, type='info') {
    const div = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    
    let colorClass = 'text-gray-300';
    if(type === 'success') colorClass = 'text-green-400';
    if(type === 'action') colorClass = 'text-yellow-400';
    
    div.innerHTML = `<span class="text-gray-500">[${time}]</span> <span class="${colorClass}">${message}</span>`;
    activityLog.appendChild(div);
    activityLog.scrollTop = activityLog.scrollHeight;
}

document.getElementById('clear-log').addEventListener('click', () => {
    activityLog.innerHTML = '';
});

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('text-blue-400', 'text-green-400', 'text-purple-400', 'border-b-2', 'border-blue-400', 'border-green-400', 'border-purple-400');
            b.classList.add('text-gray-400');
        });
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.remove('hidden');
        
        let color = 'blue';
        if(targetId === 'mail-tab') color = 'green';
        if(targetId === 'streaming-tab') color = 'purple';
        
        btn.classList.remove('text-gray-400');
        btn.classList.add(`text-${color}-400`, 'border-b-2', `border-${color}-400`);
        
        logActivity(`Switched to ${btn.innerText.trim()} mode.`, 'info');
        resetVisualization();
    });
});

function parseDetails(text, context) {
    let result = text;
    for(const key in context) {
        result = result.replace(new RegExp(`{${key}}`, 'g'), context[key]);
    }
    result = result.replace(/{date}/g, new Date().toUTCString());
    return result;
}

function startFlow(flowId, context) {
    currentFlow = flows[flowId];
    currentContext = context;
    resetVisualization();
    logActivity(`Starting protocol visualization for: ${flowId}`, 'action');
    togglePlay(true);
}

function resetVisualization() {
    currentStep = -1;
    pausePlayback();
    
    if(timelineContainer) {
        timelineContainer.innerHTML = `
            <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2 z-0"></div>
            <div class="relative z-10 w-full text-center text-gray-500 italic text-sm mt-4" id="timeline-empty-msg">
                Simulation started. Press Play to step through the protocol...
            </div>
        `;
    }
    updateUI();
}

function updateUI() {
    prevBtn.disabled = currentStep <= 0;
    nextBtn.disabled = currentStep >= currentFlow.length - 1;
    
    const playIcon = document.querySelector('#ctrl-playpause i');
    if (isPlaying) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

function renderStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= currentFlow.length) {
        pausePlayback();
        return;
    }
    
    // Clear empty message
    const emptyMsg = document.getElementById('timeline-empty-msg');
    if (emptyMsg) emptyMsg.remove();

    // Rebuild if jumping backwards or resetting
    if (stepIndex < currentStep) {
        const centerLineHTML = '<div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2 z-0"></div>';
        timelineContainer.innerHTML = centerLineHTML;
        for(let i = 0; i < stepIndex; i++) {
            appendStepToTimeline(i, false);
        }
    }
    
    currentStep = stepIndex;
    appendStepToTimeline(currentStep, true);
    
    updateUI();
    
    if (isPlaying && currentStep >= currentFlow.length - 1) {
        pausePlayback();
        logActivity('Protocol flow complete.', 'success');
    }
}

function appendStepToTimeline(index, animate) {
    const step = currentFlow[index];
    const parsedDetails = parseDetails(step.details, currentContext);
    
    const isClient = step.sender === 'client';
    const color = step.protocol === 'DNS' ? 'blue' : step.protocol === 'HTTP' ? 'yellow' : 'green';
    
    const wrapper = document.createElement('div');
    wrapper.className = `flex w-full ${isClient ? 'flex-row' : 'flex-row-reverse'} items-center relative z-10 mb-6`;
    if (animate) {
        wrapper.classList.add(isClient ? 'slide-in-left' : 'slide-in-right');
    }
    
    // Gap and Arrow HTML
    let arrowHTML = '';
    if (isClient) {
        arrowHTML = `<div class="w-full h-0.5 bg-${color}-500 relative"><i class="fa-solid fa-caret-right absolute -right-2 top-1/2 -translate-y-1/2 text-${color}-500 text-lg"></i></div>`;
    } else {
        arrowHTML = `<div class="w-full h-0.5 bg-${color}-500 relative"><i class="fa-solid fa-caret-left absolute -left-2 top-1/2 -translate-y-1/2 text-${color}-500 text-lg"></i></div>`;
    }
    
    wrapper.innerHTML = `
        <!-- Card -->
        <div class="w-5/12 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div class="bg-gray-900 px-3 py-2 border-b border-gray-700 flex justify-between items-center">
                <span class="text-xs font-bold text-${color}-400"><i class="fa-solid ${step.icon} mr-1"></i> ${step.protocol}</span>
                <span class="text-xs text-gray-500 font-mono">${isClient ? 'Client &rarr; Server' : 'Server &rarr; Client'}</span>
            </div>
            <div class="p-3">
                <div class="text-sm font-semibold text-gray-200 mb-2">${step.desc}</div>
                <div class="text-xs font-mono text-gray-400 whitespace-pre-wrap break-words bg-black p-2 rounded overflow-x-auto">${highlightSyntax(parsedDetails)}</div>
            </div>
        </div>
        <!-- Center Gap connecting line -->
        <div class="w-2/12 flex items-center justify-center relative px-2">
            ${arrowHTML}
            <div class="absolute w-3 h-3 rounded-full bg-${color}-400 shadow-[0_0_10px_currentColor] z-10"></div>
        </div>
        <!-- Spacer -->
        <div class="w-5/12"></div>
    `;
    
    timelineContainer.appendChild(wrapper);
    
    // Auto-scroll
    setTimeout(() => {
        timelineContainer.scrollTo({
            top: timelineContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
    
    if (animate) {
        logActivity(`[${step.protocol}] ${step.desc}`);
    }
}

function nextStep() {
    if (currentStep < currentFlow.length - 1) {
        renderStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 0) {
        renderStep(currentStep - 1);
    }
}

function togglePlay(forcePlay = null) {
    if (forcePlay !== null) {
        isPlaying = forcePlay;
    } else {
        isPlaying = !isPlaying;
    }
    
    if (isPlaying) {
        if(currentStep >= currentFlow.length - 1) {
            resetVisualization();
        }
        playInterval = setInterval(() => {
            if (currentStep < currentFlow.length - 1) {
                nextStep();
            } else {
                pausePlayback();
            }
        }, 1200); // 1.2s to read the steps smoothly
        nextStep(); 
    } else {
        clearInterval(playInterval);
    }
    updateUI();
}

function pausePlayback() {
    isPlaying = false;
    clearInterval(playInterval);
    updateUI();
}

// Controls
nextBtn.addEventListener('click', () => { pausePlayback(); nextStep(); });
prevBtn.addEventListener('click', () => { pausePlayback(); prevStep(); });
playPauseBtn.addEventListener('click', () => togglePlay());
document.getElementById('ctrl-replay').addEventListener('click', () => { resetVisualization(); togglePlay(true); });

// Action Buttons
document.getElementById('btn-browse').addEventListener('click', () => {
    const url = document.getElementById('url-input').value || 'www.example.com';
    startFlow('browsing', { url });
});

document.getElementById('btn-mail').addEventListener('click', () => {
    const to = document.getElementById('mail-to').value;
    const subject = document.getElementById('mail-subject').value;
    const body = document.getElementById('mail-body').value;
    const domain = to.split('@')[1] || 'example.com';
    startFlow('mail', { to, subject, body, domain });
});

document.getElementById('btn-stream').addEventListener('click', () => {
    const quality = document.getElementById('stream-quality').value.split(' ')[0]; 
    startFlow('streaming', { quality });
});

// Initialize
updateUI();
