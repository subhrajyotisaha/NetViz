from fpdf import FPDF
import datetime

class ReflectionPDF(FPDF):
    def header(self):
        # Arial bold 15
        self.set_font('Arial', 'B', 16)
        # Title
        self.set_text_color(41, 128, 185) # Blue title
        self.cell(0, 10, 'Project Reflection: Dual-Panel Activity & Protocol Visualizer', 0, 1, 'C')
        self.set_font('Arial', 'I', 10)
        self.set_text_color(100, 100, 100)
        self.cell(0, 10, f'Generated on: {datetime.datetime.now().strftime("%Y-%m-%d")}', 0, 1, 'C')
        self.ln(5)

    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Arial italic 8
        self.set_font('Arial', 'I', 8)
        self.set_text_color(128)
        # Page number
        self.cell(0, 10, 'Page ' + str(self.page_no()) + ' / {nb}', 0, 0, 'C')

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 14)
        self.set_fill_color(240, 240, 240)
        self.set_text_color(0, 0, 0)
        self.cell(0, 8, title, 0, 1, 'L', 1)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font('Arial', '', 11)
        self.set_text_color(0, 0, 0)
        # Use multi_cell for line wrapping
        self.multi_cell(0, 6, body)
        self.ln(6)

pdf = ReflectionPDF()
pdf.alias_nb_pages()
pdf.add_page()

# Section 1: AI Platform Choices
pdf.chapter_title("1. AI Platform & Models Used")
pdf.chapter_body(
    "Platform Used: Google Antigravity\n"
    "Model Used: Gemini 3.1 Pro (High)\n\n"
    "Rationale for Choice:\n"
    "Gemini 3.1 Pro (High) within the Google Antigravity environment was selected because of its agentic capabilities "
    "and advanced code generation context. It seamlessly creates a complete project structure, writing standard HTML, "
    "CSS, and Javascript simultaneously, whilst managing local files and dynamically fulfilling side requirements (like "
    "generating this exact PDF via Python execution). The agentic nature meant it could instantly prototype, test, and "
    "apply aesthetic UI patterns (Tailwind) in a single workflow without needing back-and-forth copy/pasting."
)

# Section 2: UI Synchronization Strategy
pdf.chapter_title("2. Synchronization Between Panels")
pdf.chapter_body(
    "The synchronization between the left Activity Panel and the right Protocol Visualization panel is achieved "
    "using an event-driven Finite State Machine in Vanilla JavaScript. When a user executes an action on the left "
    "(e.g., clicking 'Visit Page'), an event dispatcher triggers a specific protocol array (Flow Data) containing ordered "
    "message objects.\n\n"
    "A global `currentStep` index tracks the state. A playback function using `setInterval` automatically increments "
    "this index every 2.5 seconds, injecting the specific message data (DNS, HTTP, SMTP) into the UI. CSS keyframe "
    "animations (transform and opacity) are tightly coupled with these state changes to render physical 'packets' "
    "moving across the screen synchronously with the protocol log updates."
)

# Section 3: AI Iterations and Corrections
pdf.chapter_title("3. Iterations, Corrections & What the AI Got Wrong")
pdf.chapter_body(
    "During development, the AI made structural decisions that required minor logical refinement:\n\n"
    "1. SMTP Initial Logic: Initially, the AI generated a pure SMTP simulation but forgot that an email application must "
    "first resolve the MX (Mail Exchange) record before initiating the TCP connection to port 25. The instruction was updated "
    "to forcefully insert DNS resolution steps prior to the EHLO command.\n"
    "2. UI State Overlap: Initially, if a user clicked 'Play' rapidly multiple times, the Javascript `setInterval` duplicated, "
    "causing packets to overlap and the timeline to sprint uncontrollably. The AI corrected this by tracking the "
    "interval ID and enforcing a strict `clearInterval()` call on any playback interruption or restart."
)

# Section 4: Key Differences Observed
pdf.chapter_title("4. Key Differences in Protocol Flows")
pdf.chapter_body(
    "Browsing (DNS + HTTP):\n"
    "A standard request/response model. The client asks for a single A record, gets an IP, and sends a monolithic GET request. "
    "The connection is stateless (though kept-alive at the transport layer).\n\n"
    "Mail (DNS + SMTP):\n"
    "A highly conversational, stateful protocol. It requires querying an MX record rather than an A record. The subsequent "
    "SMTP communication requires constant acknowledgement (250 OK) at every phase: greeting, sender setup, recipient setup, "
    "and payload transmission, showing a much 'chattier' handshake than HTTP.\n\n"
    "Streaming (DNS + HTTP HLS/DASH):\n"
    "A tiered retrieval strategy. The client first fetches a 'Master Manifest' via HTTP, dissects it to find the requested "
    "quality tier, fetches a 'Media Playlist' for that tier, and finally loops through consecutive segmented video files (.ts). "
    "It demonstrates how modern streaming sits atop standard HTTP rather than using custom transport protocols."
)

pdf.output('Project_Explanation.pdf')
print("PDF successfully generated.")
