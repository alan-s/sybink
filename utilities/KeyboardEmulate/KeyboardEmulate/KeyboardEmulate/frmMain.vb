Imports System.IO.Ports

Public Class frmMain

    Dim configFile As String = Application.StartupPath + "\KeyboardEmulate.ini"
    Dim ini As New objects.IniFile(configFile)

    'for close button declaration
    Private Const MF_BYPOSITION = &H400
    Private Const MF_REMOVE = &H1000
    Private Const MF_DISABLED = &H2

    Private Declare Function RemoveMenu Lib "user32" (ByVal hMenu As IntPtr, ByVal nPosition As Integer, ByVal wFlags As Long) As IntPtr
    Private Declare Function GetSystemMenu Lib "user32" (ByVal hWnd As IntPtr, ByVal bRevert As Boolean) As IntPtr
    Private Declare Function GetMenuItemCount Lib "user32" (ByVal hMenu As IntPtr) As Integer
    Private Declare Function DrawMenuBar Lib "user32" (ByVal hwnd As IntPtr) As Boolean

    Public Sub DisableCloseButton(ByVal hwnd As IntPtr)
        Dim hMenu As IntPtr
        Dim menuItemCount As Integer

        hMenu = GetSystemMenu(hwnd, False)
        menuItemCount = GetMenuItemCount(hMenu)
        Call RemoveMenu(hMenu, menuItemCount - 1, MF_DISABLED Or MF_BYPOSITION)
        Call RemoveMenu(hMenu, menuItemCount - 2, MF_DISABLED Or MF_BYPOSITION)
        Call DrawMenuBar(hwnd)
    End Sub

    'following region is good code.  it minimizes to systray and shows nice open/close animation
#Region " Minimize To System Tray "
    Structure RECT
        Public left As Integer
        Public top As Integer
        Public right As Integer
        Public bottom As Integer
    End Structure
    Structure APPBARDATA
        Public cbSize As Integer
        Public hWnd As IntPtr
        Public uCallbackMessage As Integer
        Public uEdge As ABEdge
        Public rc As RECT
        Public lParam As IntPtr
    End Structure
    Enum ABMsg
        ABM_NEW = 0
        ABM_REMOVE = 1
        ABM_QUERYPOS = 2
        ABM_SETPOS = 3
        ABM_GETSTATE = 4
        ABM_GETTASKBARPOS = 5
        ABM_ACTIVATE = 6
        ABM_GETAUTOHIDEBAR = 7
        ABM_SETAUTOHIDEBAR = 8
        ABM_WINDOWPOSCHANGED = 9
        ABM_SETSTATE = 10
    End Enum
    Enum ABNotify
        ABN_STATECHANGE = 0
        ABN_POSCHANGED
        ABN_FULLSCREENAPP
        ABN_WINDOWARRANGE
    End Enum
    Enum ABEdge
        ABE_LEFT = 0
        ABE_TOP
        ABE_RIGHT
        ABE_BOTTOM
    End Enum
    Public Declare Function SHAppBarMessage Lib "shell32.dll" Alias "SHAppBarMessage" (ByVal dwMessage As Integer, ByRef pData As APPBARDATA) As Integer
    Private Const ABM_GETTASKBARPOS As Integer = &H5&
    Private Const WM_SYSCOMMAND As Integer = &H112
    Private Const SC_MINIMIZE As Integer = &HF020
    Protected Overrides Sub WndProc(ByRef m As System.Windows.Forms.Message)
        If m.Msg = WM_SYSCOMMAND AndAlso m.WParam.ToInt32() = SC_MINIMIZE Then
            AnimateWindow(True)
            Exit Sub
        End If
        MyBase.WndProc(m)
    End Sub
    Private Sub NotifyIcon1_DoubleClick(ByVal sender As Object, ByVal e As System.EventArgs) Handles NotifyIcon1.DoubleClick
        'AnimateWindow(False)
    End Sub
    Private Sub AnimateWindow(ByVal ToTray As Boolean)
        ' get the screen dimensions
        Dim screenRect As Rectangle = Screen.GetBounds(Me.Location)
        ' figure out where the taskbar is (and consequently the tray)
        Dim destPoint As Point
        Dim BarData As APPBARDATA
        BarData.cbSize = System.Runtime.InteropServices.Marshal.SizeOf(BarData)
        SHAppBarMessage(ABMsg.ABM_GETTASKBARPOS, BarData)
        Select Case BarData.uEdge
            Case ABEdge.ABE_BOTTOM, ABEdge.ABE_RIGHT
                ' Tray is to the Bottom Right
                destPoint = New Point(screenRect.Width, screenRect.Height)
            Case ABEdge.ABE_LEFT
                ' Tray is to the Bottom Left
                destPoint = New Point(0, screenRect.Height)
            Case ABEdge.ABE_TOP
                ' Tray is to the Top Right
                destPoint = New Point(screenRect.Width, 0)
        End Select
        ' setup our loop based on the direction
        Dim a, b, s As Single
        If ToTray Then
            a = 0
            b = 1
            s = 0.05
        Else
            a = 1
            b = 0
            s = -0.05
        End If
        ' "animate" the window
        Dim curPoint As Point, curSize As Size
        Dim startPoint As Point = Me.Location
        Dim dWidth As Integer = destPoint.X - startPoint.X
        Dim dHeight As Integer = destPoint.Y - startPoint.Y
        Dim startWidth As Integer = Me.Width
        Dim startHeight As Integer = Me.Height
        Dim i As Single
        For i = a To b Step s
            curPoint = New Point(startPoint.X + i * dWidth, startPoint.Y + i * dHeight)
            curSize = New Size((1 - i) * startWidth, (1 - i) * startHeight)
            ControlPaint.DrawReversibleFrame(New Rectangle(curPoint, curSize), Me.BackColor, FrameStyle.Thick)
            System.Threading.Thread.Sleep(15)
            ControlPaint.DrawReversibleFrame(New Rectangle(curPoint, curSize), Me.BackColor, FrameStyle.Thick)
        Next
        If ToTray Then
            Me.Hide()
        Else
            Me.Show()
        End If
    End Sub
#End Region

    Private Sub frmMain_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        Try
            DisableCloseButton(Me.Handle)

            If ini.GetInteger("misc", "Terms", 0) = 0 Then
                If MsgBox("THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE." + vbNewLine + vbNewLine + "If you accept these terms, please click YES, otherwise click NO.", MsgBoxStyle.YesNo, "Terms") = MsgBoxResult.Yes Then
                    ini.WriteInteger("misc", "Terms", 1)
                Else
                    Application.Exit()
                End If
            Else
            End If

            ComboBox1.SelectedIndex = ini.GetInteger("settings", "COM", 0)
            ComboBox2.SelectedIndex = ini.GetInteger("settings", "Baud", 0)
            ComboBox3.SelectedIndex = ini.GetInteger("settings", "Data", 0)
            ComboBox4.SelectedIndex = ini.GetInteger("settings", "Parity", 0)
            ComboBox5.SelectedIndex = ini.GetInteger("settings", "Stop", 0)

            'disabled. not used
            'ComboBox6.SelectedIndex = ini.GetInteger("settings", "Flow", 0)

        Catch ex As Exception
            MsgBox("Error Detected.  Please report following error:" + vbNewLine + ex.Message, MsgBoxStyle.Critical, "Error")
        End Try

        ApplySettings()

    End Sub

    Private Sub ApplySettings()

        Try

            SerialPort1.PortName = ComboBox1.SelectedItem.ToString()
            SerialPort1.BaudRate = CInt(ComboBox2.SelectedItem)

            SerialPort1.DataBits = ComboBox3.SelectedIndex + 5

            Dim parityMap = {IO.Ports.Parity.Even, IO.Ports.Parity.Odd, IO.Ports.Parity.None, IO.Ports.Parity.Space, IO.Ports.Parity.Mark}
            SerialPort1.Parity = parityMap(ComboBox4.SelectedIndex)

            Dim stopBitsMap = {IO.Ports.StopBits.One, IO.Ports.StopBits.OnePointFive, IO.Ports.StopBits.Two}
            SerialPort1.StopBits = stopBitsMap(ComboBox5.SelectedIndex)

            'disabled. not used
            'SerialPort1.Handshake = ComboBox6.SelectedItem

            SerialPort1.Open()

        Catch ex As Exception
            MsgBox("Serial COM error detected.  Please check settings and try again." + vbNewLine + ex.Message, MsgBoxStyle.Critical, "Error")
        End Try

    End Sub

    Private Sub SerialPort1_DataReceived(ByVal sender As System.Object, ByVal e As System.IO.Ports.SerialDataReceivedEventArgs) Handles SerialPort1.DataReceived

        Try
            SendKeys.SendWait(SerialPort1.ReadExisting)
        Catch ex As Exception
            MsgBox("Error Detected.  Please report following error:" + vbNewLine + ex.Message, MsgBoxStyle.Critical, "Error")
        End Try


    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        Try

            ini.WriteInteger("settings", "COM", ComboBox1.SelectedIndex)
            ini.WriteInteger("settings", "Baud", ComboBox2.SelectedIndex)
            ini.WriteInteger("settings", "Data", ComboBox3.SelectedIndex)
            ini.WriteInteger("settings", "Parity", ComboBox4.SelectedIndex)
            ini.WriteInteger("settings", "Stop", ComboBox5.SelectedIndex)

            'disabled. not used
            'ComboBox6.SelectedIndex = ini.GetInteger("settings", "Flow", 0)

            SerialPort1.Close()
            ApplySettings()

        Catch ex As Exception
            MsgBox("Error Detected.  Please report following error:" + vbNewLine + ex.Message, MsgBoxStyle.Critical, "Error")
        End Try
 
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        TextBox1.Text = ""
        TextBox1.Focus()
    End Sub

    Private Sub ResetPortToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ResetPortToolStripMenuItem.Click

        Try
            SerialPort1.Close()
            SerialPort1.Open()
        Catch ex As Exception
            MsgBox("Error Detected.  Please report following error:" + vbNewLine + ex.Message, MsgBoxStyle.Critical, "Error")
        End Try
    End Sub

    Private Sub SettingsToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SettingsToolStripMenuItem.Click

        Me.Visible = True
        Me.WindowState = FormWindowState.Normal
        AnimateWindow(False)

    End Sub

    Private Sub AboutToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AboutToolStripMenuItem.Click
        frmAbout.ShowDialog()
    End Sub

    Private Sub ExitToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ExitToolStripMenuItem.Click
        SerialPort1.Close()
        Me.Close()
    End Sub

    Private Sub NotifyIcon1_MouseDoubleClick(ByVal sender As System.Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles NotifyIcon1.MouseDoubleClick

        Me.Visible = True
        Me.WindowState = FormWindowState.Normal
        AnimateWindow(False)

    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click

        Try
            SerialPort1.Close()
            SerialPort1.Open()
        Catch ex As Exception
            MsgBox("Error Detected.  Please report following error:" + vbNewLine + ex.Message, MsgBoxStyle.Critical, "Error")
        End Try

    End Sub
End Class
