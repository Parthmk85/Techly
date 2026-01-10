@echo off
echo ========================================
echo Techly Website Setup
echo ========================================
echo.

REM Check if .env.local exists
if exist .env.local (
    echo .env.local already exists!
    echo.
    set /p overwrite="Do you want to overwrite it? (y/n): "
    if /i not "%overwrite%"=="y" (
        echo Setup cancelled.
        pause
        exit /b
    )
)

echo Creating .env.local file...
echo.

REM Create .env.local file
(
echo # MongoDB Connection String
echo # Replace with your actual MongoDB connection string
echo # For local development: mongodb://localhost:27017/techly
echo # For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/techly
echo.
echo MONGODB_URI=mongodb://localhost:27017/techly
echo.
echo # Next.js
echo NEXT_PUBLIC_APP_URL=http://localhost:3000
) > .env.local

echo ✓ .env.local file created successfully!
echo.
echo ========================================
echo Next Steps:
echo ========================================
echo 1. Edit .env.local and update MONGODB_URI if needed
echo 2. Make sure MongoDB is running
echo 3. Run: npm install
echo 4. Run: npm run dev
echo 5. Open: http://localhost:3000
echo ========================================
echo.
pause
